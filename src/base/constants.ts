import { resolve } from 'path';

export const PERFORMANCE_CALCULATOR_PATH = resolve(
   __dirname,
   '../../submodules/osu-tools/PerformanceCalculator/PerformanceCalculator.csproj',
);

export const PERFORMANCE_CALCULATOR_CONFIGURATION = 'Release';

export const ENDPOINT_ERROR =
   'Your request could not be processed. Please make sure the payload types and/or content matches what is expected.';
