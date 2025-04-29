import express from "express";
import {
  saveAnalysis,
  getAnalysisHistory,
  getAnalysisById,
  deleteAnalysis,
} from "../controllers/analysisController.js";
import { protect } from "../middleware/auth.js"; // Assuming you have an auth middleware

const router = express.Router();

// Routes
router.post("/", protect, saveAnalysis); // Save analysis details
router.get("/", protect, getAnalysisHistory); // Get all analysis history for the authenticated user
router.get("/:id", protect, getAnalysisById); // Get a specific analysis by ID
router.delete("/:id", protect, deleteAnalysis); // Delete a specific analysis by ID

export default router;
