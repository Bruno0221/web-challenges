import dbConnect from "../../../db/connect";
import Review from "@/db/models/Review";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "POST") {
    try {
      const newReview = await Review.create(request.body);

      response.status(201).json(newReview);
    } catch (error) {
      console.log("POST /api/products/[id]", error);
      return response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
}
