import {
   PERFORMANCE_CALCULATOR_CONFIGURATION,
   PERFORMANCE_CALCULATOR_PATH,
} from '../../../base/constants';
import { execute } from '../../../utils/execute';
import { buildCommand } from '../../buildCommand';
import { simulateOsuPayloadToArgs } from '../../../utils/performanceCalculator/serializePayload';
import type {
   SimulateOsuPayload,
   SimulateOsuResult,
} from '../../../base/types';

export const buildSimulateOsuCommand = (args: string): string => {
   return buildCommand(
      'simulate',
      PERFORMANCE_CALCULATOR_PATH,
      PERFORMANCE_CALCULATOR_CONFIGURATION,
      args,
   );
};

export const executeSimulateOsu = async (
   payload: SimulateOsuPayload,
): Promise<SimulateOsuResult> => {
   const args = simulateOsuPayloadToArgs(payload);
   const command = buildSimulateOsuCommand(args);

   const stdout = await execute(command);
   const result = JSON.parse(stdout) as SimulateOsuResult;

   return result;
};
