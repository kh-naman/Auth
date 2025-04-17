import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./db/db.js"
import userRoutes from "./routes/users.routes.js"

dotenv.config() //configuring dotev to access dotenv parameters in process.env style

const app = express()


app.use(cookieParser());

app.use(
    cors({
      origin: "http://localhost:5173", // Match your frontend URL exactly
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "Accept"],
      exposedHeaders: ["Set-Cookie", "*"],
    })
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
console.log("=== Cookie Debug ===");
console.log("Origin header:", req.headers.origin);
console.log("Request cookies:", req.cookies);
console.log("Request headers:", {
    cookie: req.headers.cookie,
    origin: req.headers.origin,
});

res.json({
    message: "Hello World",
    cookies: req.cookies,
});
});


const port = process.env.PORT ?? 8000

db()

app.use("/api/v1/users", userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})