import express from "express";
import { stock } from "../database/stock.js";

//Main route (GET)
export const route = express.Router();

route.get("/", (request, response) => {
    response.status(200).json({
        StatusCode: 200,
        Alert:"Bem vindo a livraria!",
        books: stock
    })
})

