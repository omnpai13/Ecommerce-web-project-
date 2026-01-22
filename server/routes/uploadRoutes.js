import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import adminProtect from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

// @desc   Upload image
// @route  POST /api/upload
// @access Admin
router.post("/", adminProtect, upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message:
        "No file received. Body must be Form‑Data with key 'image' and type File.",
    });
  }

  res.status(200).json({
    imageUrl: req.file.path,
  });
});

export default router;   // ✅ THIS LINE WAS MISSING
