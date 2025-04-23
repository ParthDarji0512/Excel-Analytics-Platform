import express from "express";     //"type": "module" put this in package.json to use import
import cors from "cors"; 
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config({});

const app = express(); 

//middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
})