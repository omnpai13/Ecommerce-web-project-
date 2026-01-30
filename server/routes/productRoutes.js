import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET all products (admin + website)
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// CREATE product (admin)
router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

// UPDATE product (admin)
router.put("/:id", async (req, res) => {
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE product (admin)
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

export default router;
