import {
   PERFORMANCE_CALCULATOR_CONFIGURATION,
   PERFORMANCE_CALCULATOR_PATH,
} from '../../../base/constants';
import { execute } from '../../../utils/execute';
import { simulateTaikoPayloadToArgs } from '../../../utils/performanceCalculator/serializePayload';
import { buildCommand } from '../../buildCommand';
import type {
   SimulateTaikoPayload,
   SimulateTaikoResult,
} from '../../../base/types';

export const buildSimulateTaikoCommand = (args: string): string => {
   return buildCommand(
      'simulate',
      PERFORMANCE_CALCULATOR_PATH,
      PERFORMANCE_CALCULATOR_CONFIGURATION,
      args,
   );
};

export const executeSimulateTaiko = async (
   payload: SimulateTaikoPayload,
): Promise<SimulateTaikoResult> => {
   const args = simulateTaikoPayloadToArgs(payload);
   const command = buildSimulateTaikoCommand(args);

   const stdout = await execute(command);
   const result = JSON.parse(stdout) as SimulateTaikoResult;

   return result;
};
