import express, { Application, json } from "express";
import { createClient, readClients } from "./logic";

const app: Application = express();

app.use(json());

//routes
app.post('/clients', createClient)

app.get('/clients', readClients)
//config server

const port: number = 3000;

const runningMsg = `Server is running in port ${port}`;

app.listen(port, ()=>{
    console.log(runningMsg);
    
})
