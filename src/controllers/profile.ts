import express from 'express';
import { ProfilePayload } from '../base/types';
import { executeProfile } from '../osu-tools/performanceCalculator/profile/profile';

export const profileRouter = express.Router();

profileRouter.post('/profile', async (req, res) => {
   try {
      const payload: ProfilePayload = req.body;
      const result = await executeProfile(payload);

      res.json(result);
   } catch (error) {
      res.json({
         message: error,
      });
   }
});
