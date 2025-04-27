import express from "express";     //"type": "module" put this in package.json to use import
import cors from "cors"; 
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js"; 
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();

const app = express(); 

//middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('API is running...');
});

//api routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
    connectDB(); //connect to database
    console.log(`Server is running on port ${PORT}`);
})