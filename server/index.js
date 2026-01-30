import dotenv from "dotenv";
// LOAD ENV FIRST
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// Connect DB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/orders", orderRoutes);

// Start server
const PORT = 5003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
