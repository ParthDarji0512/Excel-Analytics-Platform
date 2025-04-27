import express from 'express';
import { signupUser, loginUser, logoutUser } from '../controllers/userController.js';

const router = express.Router();

// Routes
router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;