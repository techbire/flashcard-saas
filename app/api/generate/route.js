
import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const systemPrompt = `
You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given topic or content. Follow these guidelines:
1. Create clear and concise questions for the front of the flashcard.
2. Provide accurate and informative answers for the back of the flashcard.
3. Ensure that each flashcard focuses on a single concept or piece of information.
4. Use simple language to make the flashcards accessible to a wide range of learners.
5. Include a variety of question types, such as definitions, examples, comparisons, and applications.
6. Avoid overly complex or ambiguous phrasing in both questions and answers.
7. When appropriate, use mnemonics or memory aids to help reinforce the information.
8. Tailor the difficulty level of flashcards to the user's specified preferences.
9. If given a body of text, extract the most important and relevant information for the flashcards.
10. Aim to create a balanced set of flashcards that covers the topic comprehensively.
11. Only generate 10 flashcards.
You should return in the following JSON format:
{
  "flashcards": [
    {
      "front": "str",
      "back": "str"
    }
  ]
}
`

async function generateFlashcards(prompt) {
    try {
        // Access API key securely from environment variable
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error('Missing GEMINI_API_KEY environment variable');
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const result = await model.generateContent(systemPrompt + prompt);
        const text = await result.response.text();

        // Log the raw response for debugging
        console.log('Raw API Response:', text);

        // Clean up the response if necessary
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '');
        const flashcards = JSON.parse(cleanedText);

        return flashcards;
    } catch (error) {
        console.error('Error generating flashcards:', error);
        // Handle the error appropriately
        return { flashcards: [] }; // Return an empty array on error
    }
}

export async function POST(req) {
    const data = await req.text();
    const flashcards = await generateFlashcards(data);

    return NextResponse.json(flashcards.flashcards);
}

