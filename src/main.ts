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
         beatmapPath: 'cache/map.osu',
         mods: ['HD', 'HR'],
         goods: 5,
      }),
   ]);

   res.json(JSON.parse(`[${result.join('')}]`));
});

app.listen(3000);
