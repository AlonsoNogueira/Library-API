import express from "express";
import { route } from "./routes/routes.js";
import dotenv from "dotenv";
import { loginAdmim } from "./utils/loginAdmim.js";
import { routeAdmim } from "./routes/admimRoute.js";
import { verifyToken } from "./middlewares/auth.js";
dotenv.config({ path: "../.env" });

const app = express();
app.use(express.json());

app.use("/books", route);

app.use("/books/Login", loginAdmim)

app.use("/books/Addbook", verifyToken, routeAdmim)

app.listen(process.env.PORT, () => {
  console.log(`Server Runing in PORT: ${process.env.PORT}`);
});
