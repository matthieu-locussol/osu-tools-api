import 'dotenv/config';
import { profileRouter } from './controllers/profile';
import { simulateRouter } from './controllers/simulate';
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
   res.json({
      status: 'Server healthy',
   });
});

app.use(simulateRouter);
app.use(profileRouter);

app.listen(3000);
