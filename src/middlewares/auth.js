import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: '../../.env' });

export const verifyToken = (request, response, next) => {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(401).json({Alert: "Token nao informado!"})
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if(error){
            return response.status(403).json({Alert: "Token invalido ou expirado!"})
        }

        request.user = decoded;

        next();
    });
}