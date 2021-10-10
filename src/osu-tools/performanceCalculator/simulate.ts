import { execute } from '../../utils/execute';
import { Mods } from './types';
import {
   serializeAccuracy,
   serializeBeatmapPath,
   serializeCombo,
   serializeGoods,
   serializeMehs,
   serializeMisses,
   serializeMods,
} from '../../utils/performanceCalculator/serialize';
import { _assert } from '../../utils/_assert';
import { buildCommand } from '../buildCommand';
import {
   PERFORMANCE_CALCULATOR_CONFIGURATION,
   PERFORMANCE_CALCULATOR_PATH,
} from './constants';

export type SimulatePayload = {
   beatmapPath: string;
   accuracy?: number;
   combo?: number;
   mods?: Mods;
   goods?: number;
   mehs?: number;
   misses?: number;
};

export const simulatePayloadToArgs = (payload: SimulatePayload): string => {
   const args: string[] = [];

   Object.keys(payload).forEach((keyStr) => {
      const key = keyStr as keyof SimulatePayload;

      if (payload[key] !== undefined) {
         switch (key) {
            case 'beatmapPath': {
               const beatmapPath = payload[key];
               args.push(serializeBeatmapPath(beatmapPath));
               break;
            }
            case 'accuracy': {
               const accuracy = payload[key];
               _assert(accuracy);
               args.push(serializeAccuracy(accuracy));
               break;
            }
            case 'combo': {
               const combo = payload[key];
               _assert(combo);
               args.push(serializeCombo(combo));
               break;
            }
            case 'mods': {
               const mods = payload[key];
               _assert(mods);
               args.push(serializeMods(mods));
               break;
            }
            case 'goods': {
               const goods = payload[key];
               _assert(goods);
               args.push(serializeGoods(goods));
               break;
            }
            case 'mehs': {
               const mehs = payload[key];
               _assert(mehs);
               args.push(serializeMehs(mehs));
               break;
            }
            case 'misses': {
               const misses = payload[key];
               _assert(misses);
               args.push(serializeMisses(misses));
               break;
            }
            default:
               throw new Error(`Unexpected key: ${key}`);
         }
      }
   });

   return args.join(' ');
};

export const buildSimulateCommand = (args: string): string => {
   return buildCommand(
      'simulate',
      PERFORMANCE_CALCULATOR_PATH,
      PERFORMANCE_CALCULATOR_CONFIGURATION,
      args,
   );
};

export const executeSimulate = (payload: SimulatePayload): Promise<unknown> => {
   const args = simulatePayloadToArgs(payload);
   const command = buildSimulateCommand(args);

   return execute(command);
};
