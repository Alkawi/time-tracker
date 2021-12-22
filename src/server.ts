import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connectDatabase, getCollection } from './database';

if (!process.env.MONGODB_URI) {
  throw new Error("Couldn't connect to the database");
}

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/tracked-time', async (req, res) => {
  const data = req.body;
  await getCollection().insertOne(data);
  res.status(200).send('Success');
});

app.get('/api/bookings', async (_req, res) => {
  const bookings = await getCollection().find().toArray();
  console.log(bookings);

  res.status(200).send(bookings);
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.get('*', (_request, response) => {
  response.sendFile('index.html', { root: 'dist/app' });
});

connectDatabase(process.env.MONGODB_URI).then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
  });
});
