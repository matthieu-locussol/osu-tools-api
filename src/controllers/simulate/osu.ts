import { executeSimulateOsu } from '../../osu-tools/performanceCalculator/simulate/osu';
import { ENDPOINT_ERROR } from '../../base/constants';
import express from 'express';
import type { SimulateOsuPayload } from '../../base/types';

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
      const results = await Promise.all(
         payloads.map((payload) => executeSimulateOsu(payload)),
      );

      res.json(results);
   } catch (error) {
      res.json({
         message: ENDPOINT_ERROR,
      });
   }
});
