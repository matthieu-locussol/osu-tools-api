import { ProfilePayload } from '../base/types';
import { executeProfile } from '../osu-tools/performanceCalculator/profile/profile';
import express from 'express';

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
