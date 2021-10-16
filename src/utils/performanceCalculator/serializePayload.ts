import {
   serializeBeatmapId,
   serializeAccuracy,
   serializeCombo,
   serializeMods,
   serializeGoods,
   serializeMehs,
   serializeMisses,
   serializeScore,
} from './serialize';
import { _assert } from '../_assert';
import type {
   SimulateManiaPayload,
   SimulateOsuPayload,
   SimulateTaikoPayload,
} from '../../base/types';

export const simulateOsuPayloadToArgs = (
   payload: SimulateOsuPayload,
): string => {
   const args = Object.keys(payload)
      .filter((keyStr) => {
         const key = keyStr as keyof SimulateOsuPayload;
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
      })
      .join(' ');

   return `osu ${args}`;
};

export const simulateTaikoPayloadToArgs = (
   payload: SimulateTaikoPayload,
): string => {
   const args = Object.keys(payload)
      .filter((keyStr) => {
         const key = keyStr as keyof SimulateTaikoPayload;
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
            case 'misses': {
               const misses = payload[key];
               _assert(misses);
               return serializeMisses(misses);
            }
            default:
               throw new Error(`Unexpected key: ${key}`);
         }
      })
      .join(' ');

   return `taiko ${args}`;
};

export const simulateManiaPayloadToArgs = (
   payload: SimulateManiaPayload,
): string => {
   const args = Object.keys(payload)
      .filter((keyStr) => {
         const key = keyStr as keyof SimulateManiaPayload;
         return payload[key] !== undefined;
      })
      .map((key) => {
         switch (key) {
            case 'beatmapId': {
               const beatmapId = payload[key];
               return serializeBeatmapId(beatmapId);
            }
            case 'score': {
               const score = payload[key];
               _assert(score);
               return serializeScore(score);
            }
            case 'mods': {
               const mods = payload[key];
               _assert(mods);
               return serializeMods(mods);
            }
            default:
               throw new Error(`Unexpected key: ${key}`);
         }
      })
      .join(' ');

   return `mania ${args}`;
};
