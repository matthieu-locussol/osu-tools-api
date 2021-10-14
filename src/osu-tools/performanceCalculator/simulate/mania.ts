import {
   PERFORMANCE_CALCULATOR_CONFIGURATION,
   PERFORMANCE_CALCULATOR_PATH,
} from '../../../base/constants';
import { execute } from '../../../utils/execute';
import { buildCommand } from '../../buildCommand';
import { simulateManiaPayloadToArgs } from '../../../utils/performanceCalculator/serializePayload';
import type {
   SimulateManiaPayload,
   SimulateManiaResult,
} from '../../../base/types';

export const buildSimulateManiaCommand = (args: string): string => {
   return buildCommand(
      'simulate',
      PERFORMANCE_CALCULATOR_PATH,
      PERFORMANCE_CALCULATOR_CONFIGURATION,
      args,
   );
};

export const executeSimulateMania = async (
   payload: SimulateManiaPayload,
): Promise<SimulateManiaResult> => {
   const args = simulateManiaPayloadToArgs(payload);
   const command = buildSimulateManiaCommand(args);

   const stdout = await execute(command);
   const result = JSON.parse(stdout) as SimulateManiaResult;

   return result;
};
