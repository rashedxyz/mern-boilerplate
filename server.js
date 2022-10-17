import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.get('/api/hello', cors(), (req, res) => {
  const responseObj = {message: 'Hello from MERN boilerplate backend.'}

  res.json(responseObj);
});

const port = parseInt(process.env.PORT, 10) || 8000;

mongoose
  .connect(process.env.MONGO_CONNECT_URI)
  .then(() => {
    app.listen(port, () => {
      console.log('> Connected to MongoDB');
      console.log(`> Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.log('Cannot start the app. Something went wrong. ', err);
  });
