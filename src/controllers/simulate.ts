import express from 'express';
import { executeSimulate } from '../osu-tools/performanceCalculator/simulate';

export const simulateRoute = express
   .Router()
   .post('/simulate', async (req, res) => {
      try {
         const result = await executeSimulate(req.body);
         res.json(result);
      } catch (error) {
         res.json({
            message:
               'Your request could not be processed. Please make sure the payload types and/or content matches what is expected.',
         });
      }
   });
