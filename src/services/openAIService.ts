const axios = require("axios");
const args = require("minimist")(process.argv.slice(2)); // Parse command-line arguments

// Load the API key from command-line arguments
const OPENAI_API_KEY = args.apiKey;

if (!OPENAI_API_KEY) {
    throw new Error("OpenAI API key is missing. Pass it as a command-line argument using --apiKey.");
}

console.log("Loaded OpenAI API Key:", OPENAI_API_KEY); // Debugging line

exports.generateBlogWithOpenAI = async function (researchData: { title: string; summary: string; keyPoints: string[] }) {
    console.log("Generating blog using OpenAI...");

    const messages = [
        { role: "system", content: "You are a helpful assistant that generates detailed blog posts." },
        { role: "user", content: `
            Write a detailed blog post based on the following research data:
            Title: ${researchData.title}
            Summary: ${researchData.summary}
            Key Points:
            ${researchData.keyPoints.join("\n")}
        ` },
    ];

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions", // Correct endpoint for chat models
            {
                model: "gpt-3.5-turbo", // Supported chat model
                messages: messages, // Use the messages array
                max_tokens: 500,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                },
            }
        );

        const blogContent = response.data.choices[0].message.content.trim();
        return { title: researchData.title, content: blogContent };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as import("axios").AxiosError;
                console.error("Axios error generating blog with OpenAI:", axiosError.response?.data || axiosError.message);
            } else {
                console.error("Error generating blog with OpenAI:", (error as Error).message);
            }
        } else if (error instanceof Error) {
            console.error("Error generating blog with OpenAI:", error.message);
        } else {
            console.error("Unknown error generating blog with OpenAI:", error);
        }
        throw error;
    }
};