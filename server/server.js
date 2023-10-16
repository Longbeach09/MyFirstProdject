import express from "express"; //make sure its lowercase
import ViteExpress from "vite-express";
import morgan from "morgan"; //helps with more accurate console.logs  install with npm i

//set up an express instance called 'app'
const app = express();

// Set up middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); //helps with incription
app.use(express.static("public"));
app.use(express.json());

//Import handlerfunctions
import handlerFunctions from "./controller.js";

//Routes go here
app.get("/api/:planId", handlerFunctions.getPlan);
app.post("/api/:plan", handlerFunctions.createPlan);
app.put("/api/:plan", handlerFunctions.updatePlan);
app.delete("/api/:planId", handlerFunctions.deletePlan);
app.get("/api/", handlerFunctions.listPlans);

//open up a door to the server

ViteExpress.listen(app, 2319, () =>
  console.log(`We've got a 23-19! Report to http://localhost:2319`)
);
