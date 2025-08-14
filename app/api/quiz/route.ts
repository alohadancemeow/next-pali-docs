import { quizAction } from "@/actions/quiz";
import { NextResponse } from "next/server";
import { z } from "zod";

export const quizSchema = z.object({
  topics: z.array(z.string()),
  amount: z.number(),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // convert data to zod schema
    const parsedData = quizSchema.parse(data);
    // console.log(parsedData, "parsedData");

    // Call the quiz action
    const result = await quizAction({
      topics: parsedData.topics,
      amount: parsedData.amount,
    });

    // If there's an error, return it
    if ("error" in result) {
      //   return new Response(JSON.stringify(result), {
      //     status: 400,
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });

      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    // console.log(result, "result");

    // Forward the streaming response
    return result;
  } catch (error) {
    console.error("Error processing quiz request:", error);

    // return new Response(
    //   JSON.stringify({ error: "Failed to process request" }),
    //   {
    //     status: 500,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
