import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { adminList } from "../database/adminList.js";
dotenv.config({path: "../../.env" })

export const loginAdmim = async (request, response) => {
  const { email, senha } = request.body;

  try {
    if (!email) {
      return response.status(401).json({
        statusCode: 401,
        Alert: "Porfavor insira um Email valido",
      });
    }

    if (!senha) {
      return response.status(401).json({
        statusCode: 401,
        Alert: "Porfavor insira uma senha valida",
      });
    }

    const admin = adminList.find((u) => u.email == email && u.senha == senha );

    if (!admin) {
      return response.status(404).json({
        StatusCode: 404,
        Msg: "Usuário não encontrado",
      });
    }

    const token = jwt.sign({email: admin.email }, process.env.JWT_SECRET)

    response.json({token})
  } catch (error) {
    console.log(`Error: ${error}`)
    response.status(401).json({
      StatusCode: 401,
      Alert: "Login Invalido",
      Error: error,
    });
  }
};
