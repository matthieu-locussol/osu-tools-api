import {
   simulateManiaPayloadToArgs,
   simulateOsuPayloadToArgs,
   simulateTaikoPayloadToArgs,
} from './serializePayload';
import type {
   SimulateManiaPayload,
   SimulateOsuPayload,
   SimulateTaikoPayload,
} from '../../base/types';

describe(__filename, () => {
   test('simulateOsuPayloadToArgs', () => {
      const samples: [SimulateOsuPayload, string][] = [
         [
            {
               beatmapId: 129891,
            },
            'osu 129891',
         ],
         [
            {
               beatmapId: 129891,
               accuracy: 98.66,
            },
            'osu 129891 -a:98.66',
         ],
         [
            {
               beatmapId: 129891,
               accuracy: 99,
               combo: 2099,
               goods: 5,
               mehs: 2,
               misses: 17,
               mods: ['HD', 'DT'],
            },
            'osu 129891 -a:99 -c:2099 -G:5 -M:2 -X:17 -m:HD -m:DT',
         ],
      ];

      samples.forEach(([input, output]) => {
         expect(simulateOsuPayloadToArgs(input)).toEqual(output);
      });
   });

   test('simulateTaikoPayloadToArgs', () => {
      const samples: [SimulateTaikoPayload, string][] = [
         [
            {
               beatmapId: 1569934,
            },
            'taiko 1569934',
         ],
         [
            {
               beatmapId: 1569934,
               accuracy: 98.66,
            },
            'taiko 1569934 -a:98.66',
         ],
         [
            {
               beatmapId: 1569934,
               accuracy: 99,
               combo: 2099,
               goods: 5,
               misses: 17,
               mods: ['HD', 'DT'],
            },
            'taiko 1569934 -a:99 -c:2099 -G:5 -X:17 -m:HD -m:DT',
         ],
      ];

      samples.forEach(([input, output]) => {
         expect(simulateTaikoPayloadToArgs(input)).toEqual(output);
      });
   });

   test('simulateManiaPayloadToArgs', () => {
      const samples: [SimulateManiaPayload, string][] = [
         [
            {
               beatmapId: 706049,
            },
            'mania 706049',
         ],
         [
            {
               beatmapId: 706049,
               score: 991045,
            },
            'mania 706049 -s:991045',
         ],
         [
            {
               beatmapId: 706049,
               score: 991045,
               mods: ['HD', 'DT'],
            },
            'mania 706049 -s:991045 -m:HD -m:DT',
         ],
      ];

      samples.forEach(([input, output]) => {
         expect(simulateManiaPayloadToArgs(input)).toEqual(output);
      });
   });
});
