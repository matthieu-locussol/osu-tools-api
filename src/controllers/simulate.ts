import express from 'express';
import { simulateCatchRouter } from './simulate/catch';
import { simulateManiaRouter } from './simulate/mania';
import { simulateOsuRouter } from './simulate/osu';
import { simulateTaikoRouter } from './simulate/taiko';

export const simulateRouter = express.Router();

simulateRouter.use(simulateOsuRouter);
simulateRouter.use(simulateTaikoRouter);
simulateRouter.use(simulateCatchRouter);
simulateRouter.use(simulateManiaRouter);
