import asyncHandler from "express-async-handler";
import XLSX from "xlsx";
import Upload from "../models/upload.model.js";
import multer from "multer";

// Configure Multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, limits file size upto 5mb
  fileFilter: (req, file, cb) => {
    console.log("File received:", file); // Debug log
    cb(null, true);
  }
});

// @desc    Upload and parse Excel file
// @route   POST /api/uploads
// @access  Private
export const uploadFile = [
    (req, res, next) => {
      upload.single("file")(req, res, (err) => {
        console.log("Inside multer middleware");
        if (err) {
          console.error("Multer error:", err);
          return res.status(400).json({ message: "File upload failed", error: err.message });
        }
        console.log("Multer completed, req.file:", req.file);
        next();
      });
    },
    asyncHandler(async (req, res) => {
      console.log("Inside asyncHandler, req.file:", req.file);
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
  
      const buffer = req.file.buffer;
      const workbook = XLSX.read(buffer, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
      const uploadedFile = await Upload.create({
        user: req.user._id,
        fileName: req.file.originalname,
        originalName: req.file.originalname,
        fileSize: req.file.size,
        parsedData: sheetData,
      });
  
      res.status(201).json({
        message: "File uploaded and parsed successfully",
        file: uploadedFile,
      });
    }),
  ];
  

// @desc    Get all uploaded files for a user
// @route   GET /api/uploads
// @access  Private
export const getUserUploads = asyncHandler(async (req, res) => {
  const uploads = await Upload.find({ user: req.user._id });
  res.status(200).json(uploads);
});