import 'dotenv/config';
import express from 'express';
import { version } from '../package.json';
import { profileRouter } from './controllers/profile';
import { simulateRouter } from './controllers/simulate';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
   res.json({
      status: 'Server healthy',
      version,
   });
});

app.use(simulateRouter);
app.use(profileRouter);

app.listen(3000);
