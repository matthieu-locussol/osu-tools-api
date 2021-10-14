import {
   serializeBeatmapId,
   serializeAccuracy,
   serializeCombo,
   serializeMods,
   serializeGoods,
   serializeMehs,
   serializeMisses,
} from './serialize';
import { _assert } from '../_assert';
import type { SimulatePayload } from '../../base/types';

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
