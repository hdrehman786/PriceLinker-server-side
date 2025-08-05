import express from "express"
import { configDotenv } from "dotenv";
import { connectDB } from "./utils/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import priceRouter from "./Routes/priceRouter.js";

const app = express();

configDotenv();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors({
    origin : "https://phonelinkerclient.vercel.app",
    credentials : true
}))

const PORT = process.env.PORT;

app.use("/get",priceRouter)


app.get("/",(req,res)=>{
    res.json("Api runnung")
})



connectDB().then(
    app.listen(PORT, (req, res) => {
         console.log(`api running ${PORT}`)
    }))
