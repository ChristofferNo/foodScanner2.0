import axios from "axios";

const OPENAI_API_KEY = ""; // Replace with your OpenAI API key

const chatGPTService = async (messages) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          ...messages,
        ],
        model: "gpt-4o-mini",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    console.log("response", response.data.choices[0].message.content);
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("ChatGPT API error:", error);
    throw error;
  }
};

const recipePrompt = (groceries) => {
  return `Here is a list of groceries: ${groceries}.\nReply with 3 recipes that can be cooked using only these groceries.
Reply only in JSON in the format: 'recipes': [{name: 'nameOfRecipe', ingredients: [ingredient1, ...], stepsToMake: ['step1', 'step2', ...]}, {...}, {...}]`;
};

export default { chatGPTService, recipePrompt };
