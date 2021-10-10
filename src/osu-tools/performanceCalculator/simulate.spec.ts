import { SimulatePayload, simulatePayloadToArgs } from './simulate';

describe(__filename, () => {
   test('simulatePayloadToArgs', () => {
      const payload: SimulatePayload = {
         beatmapPath: 'cache/sample.osu',
      };

      const payloadAccuracy: SimulatePayload = {
         beatmapPath: 'cache/sample.osu',
         accuracy: 98.66,
      };

      const payloadComplete: SimulatePayload = {
         beatmapPath: 'cache/sample.osu',
         accuracy: 99,
         combo: 2099,
         goods: 5,
         mehs: 2,
         misses: 17,
         mods: ['HD', 'DT'],
      };

      expect(simulatePayloadToArgs(payload)).toEqual('osu cache/sample.osu');
      expect(simulatePayloadToArgs(payloadAccuracy)).toEqual(
         'osu cache/sample.osu -a:98.66',
      );
      expect(simulatePayloadToArgs(payloadComplete)).toEqual(
         'osu cache/sample.osu -a:99 -c:2099 -G:5 -M:2 -X:17 -m:HD -m:DT',
      );
   });
});
