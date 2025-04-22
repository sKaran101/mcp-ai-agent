const readline = require("readline");
const { researchAgent } = require("./agents/researchAgent");
const { generateBlogWithOpenAI } = require("./services/openAIService");
require("dotenv").config(); // Load environment variables

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter a topic to research: ", async (topic: string) => {
        console.log(`Starting MCP AI Agent for topic: ${topic}`);

        try {
            // Step 1: Research
            const researchData = await researchAgent(topic);

            // Step 2: Blog Creation using OpenAI
            const blogData = await generateBlogWithOpenAI(researchData);

            console.log("\nGenerated Blog:");
            console.log(blogData.content);
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error:", error.message);
            } else {
                console.error("An unknown error occurred:", error);
            }
        } finally {
            rl.close();
        }
    });
}

main();