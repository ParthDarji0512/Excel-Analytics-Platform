import asyncHandler from "express-async-handler";
import Analysis from "../models/analysis.model.js";

// @desc    Save analysis details
// @route   POST /api/analysis
// @access  Private
export const saveAnalysis = asyncHandler(async (req, res) => {
  const { uploadId, xAxis, yAxis, chartType, aiSummary } = req.body;

  if (!uploadId || !xAxis || !yAxis || !chartType) {
    res.status(400);
    throw new Error("Missing required fields");
  }

  const analysis = await Analysis.create({
    user: req.user._id,
    upload: uploadId,
    xAxis,
    yAxis,
    chartType,
    aiSummary,
  });

  res.status(201).json({
    message: "Analysis saved successfully",
    analysis,
  });
});

// @desc    Get all analysis history for a user
// @route   GET /api/analysis
// @access  Private
export const getAnalysisHistory = asyncHandler(async (req, res) => {
  const analysisHistory = await Analysis.find({ user: req.user._id }).populate("upload", "fileName");
  res.status(200).json(analysisHistory);
});

// @desc    Get a specific analysis by ID
// @route   GET /api/analysis/:id
// @access  Private
export const getAnalysisById = asyncHandler(async (req, res) => {
  const analysis = await Analysis.findById(req.params.id).populate("upload", "fileName");

  if (!analysis) {
    res.status(404);
    throw new Error("Analysis not found");
  }

  if (analysis.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Not authorized to access this analysis");
  }

  res.status(200).json(analysis);
});

// @desc    Delete an analysis
// @route   DELETE /api/analysis/:id
// @access  Private
export const deleteAnalysis = asyncHandler(async (req, res) => {
  const analysis = await Analysis.findById(req.params.id);

  if (!analysis) {
    res.status(404);
    throw new Error("Analysis not found");
  }

  if (analysis.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Not authorized to delete this analysis");
  }

  await analysis.remove();
  res.status(200).json({ message: "Analysis deleted successfully" });
});