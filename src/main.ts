import { simulateRouter } from './controllers/simulateRouter';
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

app.listen(3000);
