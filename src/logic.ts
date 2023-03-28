import clients from "./database";
import { Client } from "./interfaces";
import { Request, Response, response } from "express";

const createClient = (req: Request, res: Response): Response => {
  const newClient: Client = req.body;
  clients.push(newClient);

  return response.status(201).json(newClient);
};

const readClients = (req:Request, res: Response):Response => {
    return response.status(200).json(clients)
};

export { createClient, readClients}