const axios = require("axios");

// Load the API key from environment variables
const OPENAI_API_KEY = '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';

console.log("Loaded OpenAI API Key:", OPENAI_API_KEY); // Debugging line

if (!OPENAI_API_KEY) {
    throw new Error("OpenAI API key is missing. Set it in the environment variables.");
}

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
                console.error("Axios error generating blog with OpenAI:", (error as any).response?.data || (error as Error).message);
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