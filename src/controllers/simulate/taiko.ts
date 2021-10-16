import { executeSimulateTaiko } from '../../osu-tools/performanceCalculator/simulate/taiko';
import express from 'express';
import type {
   SimulateTaikoPayload,
   SimulateTaikoResult,
} from '../../base/types';

export const simulateTaikoRouter = express.Router();

simulateTaikoRouter.post('/simulate/taiko/one', async (req, res) => {
   try {
      const payload: SimulateTaikoPayload = req.body;
      const result = await executeSimulateTaiko(payload);

      res.json(result);
   } catch (error) {
      res.json({
         message: error,
      });
   }
});

simulateTaikoRouter.post('/simulate/taiko/many', async (req, res) => {
   try {
      const payloads: SimulateTaikoPayload[] = req.body;
      const results: SimulateTaikoResult[] = [];

      for (const payload of payloads) {
         const result = await executeSimulateTaiko(payload);
         results.push(result);
      }

      res.json(results);
   } catch (error) {
      res.json({
         message: error,
      });
   }
});
