import dbConnect from "@/db/connect";
import Animal from "@/db/models/Animal";

export default async function handler(request, response) {
  const { id } = request.query;

  await dbConnect();

  if (request.method === "GET") {
    const animal = await Animal.findById(id).populate("reviews");
    return response.status(200).json(animal);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
