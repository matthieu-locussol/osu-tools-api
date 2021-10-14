import { executeSimulate } from '../osu-tools/performanceCalculator/simulate';
import express from 'express';
import type { SimulatePayload } from '../osu-tools/performanceCalculator/types';

export const simulateRouter = express.Router();

simulateRouter.post('/simulate/one', async (req, res) => {
   try {
      const payload: SimulatePayload = req.body;
      const result = await executeSimulate(payload);

      res.json(result);
   } catch (error) {
      res.json({
         message:
            'Your request could not be processed. Please make sure the payload types and/or content matches what is expected.',
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
         message:
            'Your request could not be processed. Please make sure the payload types and/or content matches what is expected.',
      });
   }
});
