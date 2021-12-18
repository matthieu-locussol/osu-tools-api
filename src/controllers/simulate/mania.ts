import express from 'express';
import type {
   SimulateManiaPayload,
   SimulateManiaResult,
} from '../../base/types';
import { executeSimulateMania } from '../../osu-tools/performanceCalculator/simulate/mania';

export const simulateManiaRouter = express.Router();

simulateManiaRouter.post('/simulate/mania/one', async (req, res) => {
   try {
      const payload: SimulateManiaPayload = req.body;
      const result = await executeSimulateMania(payload);

      res.json(result);
   } catch (error) {
      res.json({
         message: error,
      });
   }
});

simulateManiaRouter.post('/simulate/mania/many', async (req, res) => {
   try {
      const payloads: SimulateManiaPayload[] = req.body;
      const results: SimulateManiaResult[] = [];

      for (const payload of payloads) {
         const result = await executeSimulateMania(payload);
         results.push(result);
      }

      res.json(results);
   } catch (error) {
      res.json({
         message: error,
      });
   }
});
