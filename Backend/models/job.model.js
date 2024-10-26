import { application } from "express";
import mongoose from "mongoose";
const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: [String],
    salary: { type: Number, required: true },
    location: { type: String, required: true },
    jobType: { type: String, required: true },
    experienceLevel: { type: Number, required: true },
    position: { type: Number, required: true }, //number of openings
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applications: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
  },
  { timestamps: true }
);
export const Job = mongoose.model("Job", jobSchema);
