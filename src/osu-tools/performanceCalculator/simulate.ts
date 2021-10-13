import { execute } from '../../utils/execute';
import { Mods } from './types';
import {
   serializeAccuracy,
   serializeBeatmapId,
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
   beatmapId: number;
   accuracy?: number;
   combo?: number;
   mods?: Mods;
   goods?: number;
   mehs?: number;
   misses?: number;
};

export type SimulateResult = {
   Beatmap: string;
   Statistics: {
      Accuracy: number;
      Combo: number;
      Great: number;
      Ok: number;
      Meh: number;
      Miss: number;
   };
   Aim: number;
   Speed: number;
   Accuracy: number;
   Flashlight: number;
   OD: number;
   AR: number;
   'Max Combo': number;
   Mods: string;
   pp: number;
};

export const simulatePayloadToArgs = (payload: SimulatePayload): string => {
   const args = Object.keys(payload)
      .filter((keyStr) => {
         const key = keyStr as keyof SimulatePayload;
         return payload[key] !== undefined;
      })
      .map((key) => {
         switch (key) {
            case 'beatmapId': {
               const beatmapId = payload[key];
               return serializeBeatmapId(beatmapId);
            }
            case 'accuracy': {
               const accuracy = payload[key];
               _assert(accuracy);
               return serializeAccuracy(accuracy);
            }
            case 'combo': {
               const combo = payload[key];
               _assert(combo);
               return serializeCombo(combo);
            }
            case 'mods': {
               const mods = payload[key];
               _assert(mods);
               return serializeMods(mods);
            }
            case 'goods': {
               const goods = payload[key];
               _assert(goods);
               return serializeGoods(goods);
            }
            case 'mehs': {
               const mehs = payload[key];
               _assert(mehs);
               return serializeMehs(mehs);
            }
            case 'misses': {
               const misses = payload[key];
               _assert(misses);
               return serializeMisses(misses);
            }
            default:
               throw new Error(`Unexpected key: ${key}`);
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

export const executeSimulate = async (
   payload: SimulatePayload,
): Promise<SimulateResult> => {
   const args = simulatePayloadToArgs(payload);
   const command = buildSimulateCommand(args);

   const stdout = await execute(command);
   const result = JSON.parse(stdout) as SimulateResult;

   return result;
};
