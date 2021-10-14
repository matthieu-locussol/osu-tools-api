import { executeSimulate } from '../osu-tools/performanceCalculator/simulate';
import { ENDPOINT_ERROR } from '../base/constants';
import express from 'express';
import type { SimulatePayload } from '../base/types';

export const simulateRouter = express.Router();

simulateRouter.post('/simulate/one', async (req, res) => {
   try {
      const payload: SimulatePayload = req.body;
      const result = await executeSimulate(payload);

      res.json(result);
   } catch (error) {
      res.json({
         message: ENDPOINT_ERROR,
      });
   }
});

simulateRouter.post('/simulate/many', async (req, res) => {
   try {
      const payloads: SimulatePayload[] = req.body;
      const results = await Promise.all(
         payloads.map((payload) => executeSimulate(payload)),
      );

      res.json(results);
   } catch (error) {
      res.json({
         message: ENDPOINT_ERROR,
      });
   }
});
