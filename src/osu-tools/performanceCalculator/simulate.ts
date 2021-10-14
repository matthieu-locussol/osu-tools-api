import {
   PERFORMANCE_CALCULATOR_CONFIGURATION,
   PERFORMANCE_CALCULATOR_PATH,
} from '../../base/constants';
import { execute } from '../../utils/execute';
import { buildCommand } from '../buildCommand';
import { simulatePayloadToArgs } from '../../utils/performanceCalculator/serializePayload';
import type { SimulatePayload, SimulateResult } from '../../base/types';

export const buildSimulateCommand = (args: string): string => {
   return buildCommand(
      'simulate',
      PERFORMANCE_CALCULATOR_PATH,
      PERFORMANCE_CALCULATOR_CONFIGURATION,
      args,
   );
};

export const executeSimulate = async (
   payload: SimulatePayload,
): Promise<SimulateResult> => {
   const args = simulatePayloadToArgs(payload);
   const command = buildSimulateCommand(args);

   const stdout = await execute(command);
   const result = JSON.parse(stdout) as SimulateResult;

   return result;
};
