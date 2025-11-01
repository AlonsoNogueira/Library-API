import express from "express";
import { stock } from "../database/stock.js";

export const routeAdmim = express.Router();

routeAdmim.post("/", (request, response) => {
  const { Title, Eixo, amout } = request.body;

  try {
    if (!Title)
      return response
        .status(203)
        .json({ Alert: "Informe um titulo porfavor!" });

    if (!Eixo)
      return response
        .status(203)
        .json({ Alert: "Informe o Eixo tematico porfavor!" });

    if (!amout) amout = 0;

    stock.push({ Title, Eixo, amout });

    response.status(201).json({
        StatusCode: 201,
        Alert: "Livro adicionado a biblioteca com sucesso!",
        book:{
            Title, 
            Eixo,
            amout
        }
    })

  } catch (error) {
    response.status(406).json({
        StatusCode: 406,
        Alert: "Error ao adicionar o livro"
    })
  }
});
