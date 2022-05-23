import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body.product),
    temperature: 1,
    max_tokens: 200,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(product) {
  const capitalizedProduct =
    product[0].toUpperCase() + product.slice(1).toLowerCase();
  return `Generate a website name and description based on a given product.

Product: ${capitalizedProduct}
Name:`;
}