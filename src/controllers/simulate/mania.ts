import { ENDPOINT_ERROR } from '../../base/constants';
import { executeSimulateMania } from '../../osu-tools/performanceCalculator/simulate/mania';
import express from 'express';
import type { SimulateManiaPayload } from '../../base/types';

export const simulateManiaRouter = express.Router();

simulateManiaRouter.post('/simulate/mania/one', async (req, res) => {
   try {
      const payload: SimulateManiaPayload = req.body;
      const result = await executeSimulateMania(payload);

      res.json(result);
   } catch (error) {
      res.json({
         message: ENDPOINT_ERROR,
      });
   }
});

simulateManiaRouter.post('/simulate/mania/many', async (req, res) => {
   try {
      const payloads: SimulateManiaPayload[] = req.body;
      const results = await Promise.all(
         payloads.map((payload) => executeSimulateMania(payload)),
      );

      res.json(results);
   } catch (error) {
      res.json({
         message: ENDPOINT_ERROR,
      });
   }
});
