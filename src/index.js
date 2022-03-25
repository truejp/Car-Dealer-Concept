import express from "express";
import bodyParser from "body-parser";
import vehicleRoutes from "./routes/vehicleRoutes.js";
import mongoose from "mongoose";
// complete application is here
const app = express();
const port = 3000;

app.use(bodyParser.json());

//routes are /books & everything else throws a 404
app.use("/vehicle", vehicleRoutes);
app.all("*", (req, res) => res.sendStatus(404));

mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
