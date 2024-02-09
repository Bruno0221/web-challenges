import dbConnect from "@/db/connect";
import Animal from "@/db/models/Animal";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const animals = await Animal.find();
    return response.status(200).json(animals);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
