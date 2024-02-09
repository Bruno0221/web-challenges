import mongoose from "mongoose";
import Review from "./Reviews";

const { Schema } = mongoose;

const animalSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Animal = mongoose.models.Animal || mongoose.model("Animal", animalSchema);

export default Animal;
