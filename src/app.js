import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();
// initializing cors
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
// limiting maximum jason file handeling
app.use(express.json({limit:"25kb"})) // lmit have been chosen arbitarily
// setting url encoader to handel url changes
app.use(express.urlencoded({extended:true, limit:"25kb"})) // limit have been chosen arbitarily
// setting express.static forn handeling static files
app.use(express.static("public"))// here public is the name of a folder, but in our project currently no such folder exsist
// setting cookie parser
app.use(cookieParser())

export default app;