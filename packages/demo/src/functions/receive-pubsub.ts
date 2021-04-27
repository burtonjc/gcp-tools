import { Context } from "@google-cloud/functions-framework";

export const receivePubSub = (event: { data: string }, context: Context) => {
  const json = Buffer.from(event.data, "base64").toString();
  const data = JSON.parse(json);

  console.log(`Hello, ${data.name || "World"}!`);
};
