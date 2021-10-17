import {
   PERFORMANCE_CALCULATOR_CONFIGURATION,
   PERFORMANCE_CALCULATOR_PATH,
} from '../../../base/constants';
import { execute } from '../../../utils/execute';
import { profilePayloadToArgs } from '../../../utils/performanceCalculator/serializePayload';
import { buildCommand } from '../../buildCommand';
import type { ProfilePayload, ProfileResult } from '../../../base/types';

export const buildProfileCommand = (args: string): string => {
   return buildCommand(
      'profile',
      PERFORMANCE_CALCULATOR_PATH,
      PERFORMANCE_CALCULATOR_CONFIGURATION,
      args,
   );
};

export const executeProfile = async (
   payload: ProfilePayload,
): Promise<ProfileResult> => {
   const args = profilePayloadToArgs(payload);
   const command = buildProfileCommand(args);

   const stdout = await execute(command);
   const result = JSON.parse(stdout) as ProfileResult;

   return result;
};
