import mongoose from "mongoose";

const { Schema } = mongoose;

const ParametreSchema = new Schema({
  name: String,
  unity: String,
  value: String,
  placeholder: String,
});

export default ParametreSchema;
