import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export default mongoose
  .connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("Connected successfuly to the Database !!!");
  })
  .catch((error) => {
    console.log(error);
  });

// const mongoose = require("mongoose");
// require("dotenv").config({ path: "./env" });

// // Define the connection URL for Atlas cluster
// const atlasDBURL = `${process.env.ATLAS_DB_URL}/consultations`;
// // Define the connection URL for the local database
// const localDBURL = `${process.env.LOCAL_DB_URL}/consultations`;

// // Mongoose connection options
// const mongooseOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// // Connect to Atlas cluster
// mongoose
//   .connect(atlasDBURL, mongooseOptions)
//   .then(() => {
//     console.log("Connected successfully to the Atlas Database !!!");

//     // Create user in Atlas cluster
//     // Replace 'username' and 'password' with your actual credentials
//     return mongoose.connection.db.createUser({
//       user: process.env.ATLAS_DB_USER,
//       pwd: process.env.ATLAS_DB_PASSWORD,
//       roles: [{ role: "readWrite", db: "consultations" }],
//     });
//   })
//   .then(() => {
//     console.log("User created successfully in Atlas Database !!!");

//     // Connect to local database
//     return mongoose.connect(localDBURL, mongooseOptions);
//   })
//   .then(() => {
//     console.log("Connected successfully to the Local Database !!!");

//     // Create user in local database
//     // Replace 'username' and 'password' with your actual credentials
//     return mongoose.connection.db.createUser({
//       user: process.env.LOCAL_DB_USER,
//       pwd: process.env.LOCAL_DB_PASSWORD,
//       roles: [{ role: "readWrite", db: "consultations" }],
//     });
//   })
//   .then(() => {
//     console.log("User created successfully in Local Database !!!");
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
