import { simulateOsuRouter } from './simulate/osu';
import { simulateManiaRouter } from './simulate/mania';
import express from 'express';

export const simulateRouter = express.Router();

simulateRouter.use(simulateOsuRouter);
simulateRouter.use(simulateManiaRouter);
