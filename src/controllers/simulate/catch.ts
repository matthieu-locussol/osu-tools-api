import { executeSimulateCatch } from '../../osu-tools/performanceCalculator/simulate/catch';
import express from 'express';
import type {
   SimulateCatchPayload,
   SimulateCatchResult,
} from '../../base/types';

export const simulateCatchRouter = express.Router();

simulateCatchRouter.post('/simulate/catch/one', async (req, res) => {
   try {
      const payload: SimulateCatchPayload = req.body;
      const result = await executeSimulateCatch(payload);

      res.json(result);
   } catch (error) {
      res.json({
         message: error,
      });
   }
});

simulateCatchRouter.post('/simulate/catch/many', async (req, res) => {
   try {
      const payloads: SimulateCatchPayload[] = req.body;
      const results: SimulateCatchResult[] = [];

      for (const payload of payloads) {
         const result = await executeSimulateCatch(payload);
         results.push(result);
      }

      res.json(results);
   } catch (error) {
      res.json({
         message: error,
      });
   }
});
