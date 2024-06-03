import express from "express"
import { create, deleteUser, getOne, getall, update } from "../controller/userController.js";
const route =express.Router();


route.post("/create",create);
route.get("/getall",getall)
route.get("/getOne/:id",getOne);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteUser);

export default route;