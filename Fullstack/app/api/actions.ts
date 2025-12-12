"use server"
import ollama from 'ollama'

export async function sendMessage(initialState: any, formData: FormData) {

        const message = formData.get("message")?.toString();
        const model = formData.get("model")?.toString();
        const response = await ollama.chat({
                model: model || "gpt-oss:120b-cloud",
                messages: [
                        { role: "user", content: `keep all responses for this message ${message} not more than 3 sentences 8 words long for every sentence ` || "" }]
        })
        console.log("Message received:", message);
        return { message, response: response.message.content }
}
export async function fetchModels() {
        const models = await ollama.list()
        console.log("Models fetched:", models);
        return models;
}
