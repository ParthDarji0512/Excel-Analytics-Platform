import express from 'express';
import { uploadFile, getUserUploads } from '../controllers/uploadController.js';
import { protect } from '../middleware/auth.js'; // Assuming you have an auth middleware

const router = express.Router();


// Routes
router.post('/',protect, uploadFile); // Upload and parse Excel file
router.get('/', protect, getUserUploads); // Get all uploaded files for the authenticated user

export default router;