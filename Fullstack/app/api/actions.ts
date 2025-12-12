"use server"

import ollama from 'ollama'
import path from "path";
import { writeFile } from "fs/promises";
export async function sendMessage(initialState: any, formData: FormData) {
        const message = formData.get("message")?.toString();
        const model = formData.get("model")?.toString();
        const file = formData.get("file") as File | null;
        console.log("File received:", file);
        let imagePath: string | null = null;

            if (file) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        imagePath = path.join("/tmp", file.name); // safe upload location
        await writeFile(imagePath, buffer);

        console.log("Saved image to:", imagePath);
    }
        const response = await ollama.chat({
                model: model || "gpt-oss:120b-cloud",
                messages: [
                        {
                                role: "user",
                                content: `keep all responses for this message ${message} not more than 3 sentences, 8 words long each.`,


                                images: imagePath ? [imagePath] :[]
                        },
                ],

        })
        console.log("Message received:", message);
        return { message, response: response.message.content }
}
export async function fetchModels() {
        const models = await ollama.list()
        console.log("Models fetched:", models);
        return models;
}
