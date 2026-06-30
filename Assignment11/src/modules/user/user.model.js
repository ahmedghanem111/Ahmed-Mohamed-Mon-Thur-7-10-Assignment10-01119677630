import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
    },

    role: {
      type: String,
      enum: ["user","admin"],
      default: "user"
    },
    provider: {
      type: String,
      enum: ["system", "google"],
      default: "system",
    },
    googleId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

 export default mongoose.model("User", userSchema);

