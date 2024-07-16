import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongo from "./Data/connecttoMongos.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // for parsing application/json (from req.body)
app.use(cookieParser());


app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)



app.listen(PORT,()=> {
    connectToMongo();
    console.log(`server running on port ${PORT}`)
    
});