import express from "express";     //"type": "module" put this in package.json to use import
import cors from "cors"; 
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js"; 
import dotenv from "dotenv";

dotenv.config({});

const app = express(); 

//middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());

const corsOptions = {
  origin: ["http://localhost:5173"],
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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
    connectDB(); //connect to database
    console.log(`Server is running on port ${PORT}`);
})