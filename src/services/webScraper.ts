import axios from "axios";
const args = require("minimist")(process.argv.slice(2)); // Parse command-line arguments

// Load the API key from command-line arguments
const OPENAI_API_KEY = args.apiKey;

if (!OPENAI_API_KEY) {
    throw new Error("OpenAI API key is missing. Pass it as a command-line argument using --apiKey.");
}

exports.scrapeWebData = async function (topic: string) {
    console.log(`Generating data for topic: ${topic} using OpenAI...`);

    const prompt = `
        Provide a detailed summary about the topic: "${topic}".
    `;

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions", // OpenAI Chat Completions endpoint
            {
                model: "gpt-3.5-turbo", // Use a supported model
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: prompt },
                ],
                max_tokens: 500,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                },
            }
        );

        const generatedData = response.data.choices[0].message.content.trim();
        return generatedData; // Return the generated data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Axios error generating data with OpenAI:", error.response?.data || error.message);
        } else if (error instanceof Error) {
            console.error("Error generating data with OpenAI:", error.message);
        } else {
            console.error("Unknown error generating data with OpenAI:", error);
        }
        throw error;
    }
};