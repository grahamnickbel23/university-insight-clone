import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';

dotenv.config(); // as we should initialize dot.env as soon as possible
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
// function to connect database
connectDB()