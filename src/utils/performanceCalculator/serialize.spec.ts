import { serializeBeatmapPath, serializeMods } from './serialize';

describe(__filename, () => {
   test('serializeBeatmapPath', () => {
      expect(serializeBeatmapPath('')).toEqual('osu ');
      expect(serializeBeatmapPath('cache/example.osu')).toEqual(
         'osu cache/example.osu',
      );
   });

   test('serializeMods', () => {
      expect(serializeMods([])).toEqual('');
      expect(serializeMods(['HR'])).toEqual('-m:HR');
      expect(serializeMods(['HD', 'DT'])).toEqual('-m:HD -m:DT');
   });
});
