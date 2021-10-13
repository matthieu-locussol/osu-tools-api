import { SimulatePayload, simulatePayloadToArgs } from './simulate';

describe(__filename, () => {
   test('simulatePayloadToArgs', () => {
      const payload: SimulatePayload = {
         beatmapId: 129891,
      };

      const payloadAccuracy: SimulatePayload = {
         beatmapId: 129891,
         accuracy: 98.66,
      };

      const payloadComplete: SimulatePayload = {
         beatmapId: 129891,
         accuracy: 99,
         combo: 2099,
         goods: 5,
         mehs: 2,
         misses: 17,
         mods: ['HD', 'DT'],
      };

      expect(simulatePayloadToArgs(payload)).toEqual('osu 129891');
      expect(simulatePayloadToArgs(payloadAccuracy)).toEqual(
         'osu 129891 -a:98.66',
      );
      expect(simulatePayloadToArgs(payloadComplete)).toEqual(
         'osu 129891 -a:99 -c:2099 -G:5 -M:2 -X:17 -m:HD -m:DT',
      );
   });
});
