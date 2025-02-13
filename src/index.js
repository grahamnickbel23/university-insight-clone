import dotenv from 'dotenv';
import connectDB from './db/index.js';
import app from './app.js';

dotenv.config(); // as we should initialize dot.env as soon as possible

// function to connect database
connectDB()
.then(() => {
  const port = parseInt(process.env.PORT) || 3000;
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
})// cheaking if app.js have connected after connecting database
.catch((eror)=>{
  console.log("Mongo db connection problen:", eror);
})// cheaking if app has some problme connecting after db conected