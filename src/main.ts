import express from 'express';
import { executeSimulate } from './osu-tools/performanceCalculator/simulate';

const app = express();

app.get('/', (_req, res) => {
   res.json({
      status: 'Server healthy',
   });
});

app.get('/simulate', async (_req, res) => {
   const result = await Promise.all([
      executeSimulate({
         beatmapId: 129891,
         mods: ['HD', 'HR'],
         goods: 5,
      }),
   ]);

   res.json(result);
});

app.listen(3000);
