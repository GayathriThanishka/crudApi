
import express from "express"

import apiLogger from "../middleware/todo.middleware.js";
import userListController from "../controller/user.list.controller.js";
import createUserController from "../controller/create.user.controller.js";
import updateUserController from "../controller/update.user.controller.js";
import deleteUserController from "../controller/delete.user.controller.js";

const todoRouter = express.Router();
console.log("router accessed");

//get


todoRouter.get("/details",apiLogger, userListController);

//post

todoRouter.post("/add", apiLogger, createUserController);

//update

todoRouter.patch("/update",apiLogger,updateUserController)

//delete 

todoRouter.delete("/delete/:id",apiLogger,deleteUserController)


export default todoRouter