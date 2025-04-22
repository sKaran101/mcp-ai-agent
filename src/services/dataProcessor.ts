exports.processRawData = function (rawData: string) {
    console.log("Processing raw data...");
    const sentences = rawData.split(". ");
    const keyPoints = sentences.slice(0, 3); // Extract the first 3 sentences as key points

    return {
        title: "Research on Topic",
        summary: rawData,
        keyPoints: keyPoints.map((point) => `- ${point.trim()}`),
    };
};