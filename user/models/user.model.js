import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const UserSchema = new Schema(
  {
    userName: String,
    password: String,
    email: String,
    structure: String,
    role: { 
          type: String,
          enum: ["Admin", "User"],
          default: "User",
    },
    isActivated: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const UserModel = model("User", UserSchema);

export default UserModel;
