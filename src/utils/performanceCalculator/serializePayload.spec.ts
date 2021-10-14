import { simulatePayloadToArgs } from './serializePayload';
import type { SimulatePayload } from '../../base/types';

describe(__filename, () => {
   test('simulatePayloadToArgs', () => {
      const samples: [SimulatePayload, string][] = [
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
         expect(simulatePayloadToArgs(input)).toEqual(output);
      });
   });
});
