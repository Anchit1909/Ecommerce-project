import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { createClient } from "@sanity/client";

const query = groq`*[_type == "category"] {
  _id,
    ...
  }`;

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: process.env.NODE_ENV === "production", // set to `true` to fetch from edge cache
  apiVersion: "2023-03-12", // use current date (YYYY-MM-DD) to target the latest API version
});

type Data = {
  categories: Category[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories: Category[] = await client.fetch(query);
  // console.log(categories);
  res.status(200).json({ categories });
}
