export const config = {
    apiKeys: {
        researchApi: 'YOUR_RESEARCH_API_KEY',
        blogApi: 'YOUR_BLOG_API_KEY'
    },
    urls: {
        researchEndpoint: 'https://api.example.com/research',
        blogEndpoint: 'https://api.example.com/blog'
    },
    logging: {
        level: 'info',
        logToFile: false
    },
    otherSettings: {
        maxResearchResults: 100,
        defaultBlogAuthor: 'Admin'
    }
};