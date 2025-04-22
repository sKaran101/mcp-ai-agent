exports.blogAgent = async function (researchData: { title: string; summary: string; keyPoints: string[] }) {
    console.log("Generating blog from research data...");
    const blogContent = `
### ${researchData.title}

${researchData.summary}

Key Points:
${researchData.keyPoints.join("\n")}
    `;
    return { title: researchData.title, content: blogContent };
};