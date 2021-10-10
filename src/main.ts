import express from 'express';
import { executeSimulate } from './osu-tools/performanceCalculator/simulate';

const app = express();

app.get('/', (_req, res) => {
   res.send('Hello World');
});

app.get('/simulate', async (_req, res) => {
   const result = await Promise.all([
      executeSimulate({
         beatmapPath: '/home/jeckhys/Unix/osu-tools-api/cache/map.osu',
         mods: ['HD', 'HR'],
         goods: 5,
      }),
   ]);

   res.send(result);
});

app.listen(3000);
