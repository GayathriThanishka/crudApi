import express from "express"
import todoRouter from "./src/router/todo.router.js";
import * as dotenv from 'dotenv'

import { sqlConnection } from "./src/sql/connection/sql.connection.js";

import job from "./src/jobs/cron.job.js";

import { v4 as uuidv4 } from 'uuid';


dotenv.config()
const app = express()


const userId=uuidv4()
console.log(`id is : ${userId}`)

app.use(express.json());

//Router

app.use("/todoApp", todoRouter)


//identify port

let PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`port Number is : ${PORT}`)
})

sqlConnection()


job.start();