import { Configuration } from "openai";
export const configureOpenAI = () => {
    const config = new Configuration({
        apiKey: process.env.APENAI_SECRET_KEY,
        organization: process.env.OPENAI_ORGANIZATION
    });
    return config;
};
//# sourceMappingURL=openai.cofig.js.map