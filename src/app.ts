import express, { Application, json } from "express";

const app: Application = express();

app.use(json());

//routes

//config server

const port: number = 3000;

const runningMsg = `Server is running in port ${port}`;

app.listen(port, ()=>{
    console.log(runningMsg);
    
})
