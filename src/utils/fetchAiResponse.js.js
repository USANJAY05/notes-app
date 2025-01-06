import { GoogleGenerativeAI } from "@google/generative-ai";

const fetchAIResponse = async ( prompt) => {
  try {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY); // Initialize with API key
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Select the model
    const result = await model.generateContent(prompt); // Generate content
    return result.response.text(); // Return the generated response
  } catch (error) {
    console.error("Error generating AI response:", error);
    throw new Error("Failed to generate response");
  }
};

export default fetchAIResponse;
