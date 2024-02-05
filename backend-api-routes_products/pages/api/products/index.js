import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  if (request.method === "GET") {
    response.status(200).json(getAllProducts());
    return;
  }
  response.status(405).json({ message: "forbidden method" });
}
