# blog-ai
Implementing open ai to do research and create blogs on their own
=======
# MCP AI Agent

## Overview
The MCP AI Agent is a project designed to automate the process of researching web data and generating blog posts based on that research. The project consists of various agents and services that work together to fetch, process, and present information in a structured format.

## Project Structure
```
mcp-ai-agent
├── src
│   ├── agents
│   │   ├── researchAgent.ts
│   │   ├── blogAgent.ts
│   │   └── index.ts
│   ├── services
│   │   ├── webScraper.ts
│   │   ├── dataProcessor.ts
│   │   └── index.ts
│   ├── utils
│   │   ├── logger.ts
│   │   └── config.ts
│   ├── app.ts
│   └── types
│       ├── researchData.ts
│       ├── blogData.ts
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd mcp-ai-agent
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Run the application:
   ```
   npx ts-node src/app.ts --apiKey=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
   ```
   [In the project testing is done using OpenAI Api key]

2. The application will initialize the Research Agent to fetch data from the web and then pass that data to the Blog Agent to generate a blog post.

## Agents
- **ResearchAgent**: Responsible for fetching research data from the web using the WebScraper service.
- **BlogAgent**: Takes the research data and generates a blog post.

## Services
- **WebScraper**: Performs web scraping to gather data from specified URLs.
- **DataProcessor**: Processes the raw research data into a structured format suitable for the BlogAgent.

## Utilities
- **Logger**: Provides logging functionality for tracking application events and errors.
- **Config**: Contains configuration settings such as API keys and URLs.

## Types
- **ResearchData**: Defines the structure of the research data object.
- **BlogData**: Defines the structure of the blog post object.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.


## License
This project is licensed under the MIT License. See the LICENSE file for more details.
>>>>>>> 86b6ea7 (merge commit)
