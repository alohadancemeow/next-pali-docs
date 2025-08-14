import { streamObject } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { z } from "zod";

// Note: The book content is a placeholder. In a real scenario, you would fetch the actual book content.
const bookContent = "Pali content here...";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export const quizSchema = z.object({
  topics: z.array(z.string()),
  amount: z.number(),
});

export const quizResponeseSchema = z.object({
  questions: z.array(
    z.object({
      question: z.string().describe("question text based on the book content"),
      answer: z
        .string()
        .describe("correct answer from the book (max 15 words)"),
      option1: z
        .string()
        .describe("wrong option 1 from the book (max 15 words)"),
      option2: z
        .string()
        .describe("wrong option 2 from the book (max 15 words)"),
      option3: z
        .string()
        .describe("wrong option 3 from the book (max 15 words)"),
    })
  ),
});

export type QuizResponse = z.infer<typeof quizResponeseSchema>;

export async function quizAction(input: { topics: string[]; amount: number }) {
  try {
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return {
        error: "Google API key is not configured",
      };
    }

    // setup google generative ai
    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });

    // Using this book content as reference: ${JSON.stringify(bookContent)}

    const result = streamObject({
      model: google("gemini-2.0-flash-exp"),
      schema: quizResponeseSchema,
      prompt: `
      
      Generate ${input.amount} multiple-choice questions about ${input.topics}.
      The questions must be based on the provided book content.
      Each question should test understanding of key concepts from the book.

      Make sure each question and its options are directly related to the book content.
      Ensure all fields are within the word limits.
      Translate all questions, answers, and options to Thai language.
      `,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Error processing chat request:", error);
    return {
      error: "Failed to process request!",
    };
  }
}
