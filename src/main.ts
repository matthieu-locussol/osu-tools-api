import express from 'express';
import { simulateRoute } from './controllers/simulate';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
   res.json({
      status: 'Server healthy',
   });
});

app.use(simulateRoute);

app.listen(3000);
