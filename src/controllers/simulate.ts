import { simulateManiaRouter } from './simulate/mania';
import { simulateOsuRouter } from './simulate/osu';
import { simulateTaikoRouter } from './simulate/taiko';
import express from 'express';

export const simulateRouter = express.Router();

simulateRouter.use(simulateOsuRouter);
simulateRouter.use(simulateTaikoRouter);
simulateRouter.use(simulateManiaRouter);
