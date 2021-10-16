import { ENDPOINT_ERROR } from '../../base/constants';
import { executeSimulateOsu } from '../../osu-tools/performanceCalculator/simulate/osu';
import express from 'express';
import type { SimulateOsuPayload, SimulateOsuResult } from '../../base/types';

export const simulateOsuRouter = express.Router();

simulateOsuRouter.post('/simulate/osu/one', async (req, res) => {
   try {
      const payload: SimulateOsuPayload = req.body;
      const result = await executeSimulateOsu(payload);

      res.json(result);
   } catch (error) {
      res.json({
         message: ENDPOINT_ERROR,
      });
   }
});

simulateOsuRouter.post('/simulate/osu/many', async (req, res) => {
   try {
      const payloads: SimulateOsuPayload[] = req.body;
      const results: SimulateOsuResult[] = [];

      for (const payload of payloads) {
         const result = await executeSimulateOsu(payload);
         results.push(result);
      }

      res.json(results);
   } catch (error) {
      res.json({
         message: ENDPOINT_ERROR,
      });
   }
});
