import express from "express";
import questionRoutes from "./routes/questionRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import {
  notFoundErrorHandler,
  errorHandler,
} from "./middlewares/errorHandler.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// API routes
app.use("/api", questionRoutes);
app.use("/api", scoreRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "PRODUCTION") {
  const frontendPath = path.resolve(__dirname, "../frontend/build");
  console.log("Serving frontend from:", frontendPath);

  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(frontendPath, "index.html"));
  });
}

// Error handling middlewares
app.use(notFoundErrorHandler);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
