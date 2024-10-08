import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long. Here are the instructions:
1. Create clear and concise questions for the front of the flash card
2.Only generate 10 flashcards 

Return in the following JSON format
{
    "flashcards":
    [
        {
            "front": str,
            "back": str
        }
    ]
}

`

export async function POST(req) {
    const openai = new OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completions.create({
        messages:[
            {role: "system", content: systemPrompt},
            {role: "user", content: data}
        ],

        model: "gpt-4o",
        response_format: {type: 'json_object'},
    })

    console.log(completion.choices[0].message.content)
    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcards)


}