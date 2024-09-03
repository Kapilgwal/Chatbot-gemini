// Import necessary modules from the @google/generative-ai package
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// Initialize GoogleGenerativeAI with your API key
const apiKey = "";
const genAI = new GoogleGenerativeAI({ apiKey });

// Define the model configuration
const modelConfig = {
    model: "gemini-1.5-flash",
};

// Define the generation configuration
const generationConfig = {
    temperature: 1.0,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

// Function to start a chat session and send a prompt
async function runChat(prompt) {
    try {
        // Get the generative model instance
        const model = genAI.getGenerativeModel(modelConfig);

        // Start a new chat session with the model
        const chatSession = model.startChat({
            generationConfig,
            // Optionally adjust safety settings
            // See https://ai.google.dev/gemini-api/docs/safety-settings
            history: [],
        });

        // Send a message (prompt) to the chat session and await the response
        const result = await chatSession.sendMessage(prompt);

        // Output the result text
        console.log(result.response.text());
    } catch (error) {
        // Handle any errors that may occur during the API call
        console.error("Error during chat session:", error);
    }
}

// Export the runChat function as a module
export default runChat;
