import {
   serializeAccuracy,
   serializeBeatmapId,
   serializeCombo,
   serializeGoods,
   serializeMehs,
   serializeMisses,
   serializeMods,
} from './serialize';
import type { Mods } from '../../osu-tools/performanceCalculator/types';

describe(__filename, () => {
   test('serializeBeatmapId', () => {
      expect(serializeBeatmapId(129891)).toEqual('osu 129891');
   });

   test('serializeAccuracy', () => {
      expect(serializeAccuracy(99.87)).toEqual('-a:99.87');
   });

   test('serializeCombo', () => {
      expect(serializeCombo(2856)).toEqual('-c:2856');
   });

   test('serializeMods', () => {
      const samples: [Mods, string][] = [
         [[], ''],
         [['HR'], '-m:HR'],
         [['HD', 'DT'], '-m:HD -m:DT'],
      ];

      samples.forEach(([input, output]) => {
         expect(serializeMods(input)).toEqual(output);
      });
   });

   test('serializeGoods', () => {
      expect(serializeGoods(7)).toEqual('-G:7');
   });

   test('serializeMehs', () => {
      expect(serializeMehs(5)).toEqual('-M:5');
   });

   test('serializeMisses', () => {
      expect(serializeMisses(3)).toEqual('-X:3');
   });
});
