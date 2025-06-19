import dotenv from "dotenv";
import "./common/config/db_config.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Connected to the PORT--- ${process.env.PORT}`);
});
