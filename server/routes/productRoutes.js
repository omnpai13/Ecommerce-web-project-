import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import adminProtect from "../middleware/adminAuthMiddleware.js";
import { createProductReview } from "../controllers/productController.js";
import protect from "../middleware/userAuthMiddleware.js";
import { createSampleProduct } from "../controllers/productController.js";


const router = express.Router();

// PUBLIC
router.get("/", getProducts);
router.get("/:id", getProductById);

// ADMIN
router.post("/", adminProtect, createProduct);
router.put("/:id", adminProtect, updateProduct);
router.delete("/:id", adminProtect, deleteProduct);

//REVIEW
router.post("/:id/reviews", protect, createProductReview);

//CREATE SAMPLE PRODUCTS
router.post("/create", adminProtect, createSampleProduct);

export default router;
