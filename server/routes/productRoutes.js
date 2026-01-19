import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/productController.js";
import adminProtect from "../middleware/adminAuthMiddleware.js";
import {updateProduct} from "../controllers/productController.js"

const router = express.Router();

// PUBLIC ROUTES
router.get("/", getProducts);
router.get("/:id", getProductById);

// ADMIN ROUTES
router.post("/", adminProtect, createProduct);
router.delete("/:id", adminProtect, deleteProduct);

router.put("/:id", adminProtect, updateProduct);

export default router;
