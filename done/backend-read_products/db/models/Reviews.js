import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: String,
  text: String,
  rating: Number,
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
