import { getProductById } from "@/services/productServices";
import { Router } from "next/router";

export default function handler(request, response) {
  if (request.method === "GET") {
    const { id } = request.query;
    response.status(200).json(getProductById(id));
    return;
  }
  response.status(405).json({ message: "forbidden method" });
}
