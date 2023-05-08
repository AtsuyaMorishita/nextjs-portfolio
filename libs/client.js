import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "portfolio-atsuya",
  apiKey: process.env.MICRO_CMS_API_KEY,
});
