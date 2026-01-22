import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import adminProtect from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

// @desc   Upload image
// @route  POST /api/upload
// @access Admin
router.post(
  "/",
  adminProtect,
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          message: "No file received. Use form-data with key 'image'",
        });
      }

      res.status(200).json({
        imageUrl: req.file.path,
      });
    } catch (error) {
      console.error("UPLOAD ERROR:", error);
      res.status(500).json({
        message: "Image upload failed",
        error: error.message,
      });
    }
  }
);


export default router;   
