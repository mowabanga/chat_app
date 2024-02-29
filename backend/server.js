import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import ctMongoDB from "./db/ctMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // Parses incoming requests with JSON payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

/*app.get("/", (req, res) => {
  res.send("Server is ready");
});*/

app.listen(PORT, () => {
  ctMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
