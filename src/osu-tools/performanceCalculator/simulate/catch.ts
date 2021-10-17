import {
   PERFORMANCE_CALCULATOR_CONFIGURATION,
   PERFORMANCE_CALCULATOR_PATH,
} from '../../../base/constants';
import { execute } from '../../../utils/execute';
import { simulateCatchPayloadToArgs } from '../../../utils/performanceCalculator/serializePayload';
import { buildCommand } from '../../buildCommand';
import type {
   SimulateCatchPayload,
   SimulateCatchResult,
} from '../../../base/types';

export const buildSimulateCatchCommand = (args: string): string => {
   return buildCommand(
      'simulate',
      PERFORMANCE_CALCULATOR_PATH,
      PERFORMANCE_CALCULATOR_CONFIGURATION,
      args,
   );
};

export const executeSimulateCatch = async (
   payload: SimulateCatchPayload,
): Promise<SimulateCatchResult> => {
   const args = simulateCatchPayloadToArgs(payload);
   const command = buildSimulateCatchCommand(args);

   const stdout = await execute(command);
   const result = JSON.parse(stdout) as SimulateCatchResult;

   return result;
};
