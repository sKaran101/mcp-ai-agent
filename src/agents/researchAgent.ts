const { scrapeWebData } = require("../services/webScraper");
const { processRawData } = require("../services/dataProcessor");

exports.researchAgent = async function (topic: string) {
    console.log(`Starting research on topic: ${topic}`);
    try {
        const rawData = await scrapeWebData(topic);
        const structuredData = processRawData(rawData);
        console.log(`Research completed for topic: ${topic}`);
        return structuredData;
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error in researchAgent: ${error.message}`);
        } else {
            console.error(`Error in researchAgent: ${String(error)}`);
        }
        throw new Error("Failed to complete research");
    }
};