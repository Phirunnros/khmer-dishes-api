// Import Express
import { config as loadEnv } from "dotenv";
import express from "express";
import connectDB from "./configs/db.js";
loadEnv();
const app = express();
// connect DB
connectDB();
console.log(process.env.MONGO_URI);

const dishes = [
  {
    id: "001",
    title: "Khmer dish 01",
    img: "My Dish",
  },
  {
    id: "002",
    title: "Khmer dish 02",
    img: "My Dish",
  },
  {
    id: "003",
    title: "Khmer dish 03",
    img: "My Dish",
  },
];

// Define a route for the root URL
app.get("/", (req, res) => {
  console.log(req.originalUrl);
  res.send(
    "Welcome to the Khmer Dishes API! Visit /dishes to see the list of dishes."
  );
});

// Define the route for /dishes
app.get("/dishes", (req, res) => {
  console.log(req.url);
  res.json({
    status: "success",
    result: dishes.length,
    dishes,
  });
});

// handle undifined route
app.get("*", (req, res) => {
  res.send(
    `<divx
        style ="
        margin : auto;
        width : max-content;
        textAlign : center;
        color : #ff6b6b
        "
        >
            <h1>This ${req.url} route is undefined 🚧</h1>
        </divx>`
  );
});

export default app;
