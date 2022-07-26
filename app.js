require("dotenv").config();
const express = require("express");

const usersRouter = require("./routes/users");
const connectDB = require("./server/connectDB");

//Creates express app
const app = express();

//Set port number
PORT = process.env.PORT || 3000;

//Parses json file with express
app.use(express.json());

connectDB(); //Connect to database

//Load routes
app.use("/users", usersRouter);

//Server event listener
app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
