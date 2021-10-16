import { simulateManiaRouter } from './simulate/mania';
import { simulateOsuRouter } from './simulate/osu';
import express from 'express';

export const simulateRouter = express.Router();

simulateRouter.use(simulateOsuRouter);
simulateRouter.use(simulateManiaRouter);
