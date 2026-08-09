import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import chatHandler from "./chat.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/chat", chatHandler);

const PORT = 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🤖 ABTalks AI server running on port ${PORT}`);
});