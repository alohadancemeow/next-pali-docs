import { ProvideLinksToolSchema } from "../../../lib/chat/inkeep-qa-schema";
import { createOpenAI } from "@ai-sdk/openai";
import { convertToModelMessages, streamText } from "ai";
import client from "@/lib/algolia-client";
import { SearchResult } from "@/components/search/MySearchDialog";

export const runtime = "edge";

const openai = createOpenAI({
  // custom settings, e.g.
  //   headers: {
  //     "header-name": "header-value",
  //   },
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const reqJson = await req.json();
  const userLatestMessage = reqJson.messages[reqJson.messages.length - 1];

  // Search Algolia for relevant content
  let contextContent = "";
  try {
    const searchResults = await client.search([
      {
        indexName: "docs",
        params: {
          query: userLatestMessage.content,
          hitsPerPage: 5,
        },
      },
    ]);

    console.log("Algolia search results:", searchResults);

    const contexts = (searchResults.results[0] as any).hits as SearchResult[];

    contexts.length !== 0 &&
      contexts
        .map(
          (hit: any, i: number) =>
            `Document ${i + 1}:\n${
              hit.content || hit.text || JSON.stringify(hit)
            }`
        )
        .join("\n\n");

    // const hits = (searchResults.results[0] as any).hits || [];

    // Format search results as context
    for (const hit of contexts) {
      contextContent += `Title: ${hit.title}\n`;
      contextContent += `URL: ${hit.url}\n`;
      contextContent += `Content: ${hit.content}\n\n---\n\n`;
    }
  } catch (error) {
    console.error("Algolia search error:", error);
  }

  // Add context to messages
  const messagesWithContext = [
    {
      role: "system",
      content: `You are a helpful assistant for the Pali documentation. Use the following context to answer questions. If the context doesn't contain relevant information, say so.\n\nContext:\n${contextContent}`,
    },
    ...reqJson.messages,
  ];

  const result = streamText({
    model: openai("gpt-4"),
    tools: {
      provideLinks: {
        inputSchema: ProvideLinksToolSchema,
      },
    },
    messages: convertToModelMessages(
      // reqJson.messages,
      messagesWithContext,
      {
        ignoreIncompleteToolCalls: true,
      }
    ),
    toolChoice: "auto",
  });

  return result.toUIMessageStreamResponse();
}
