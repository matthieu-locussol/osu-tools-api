import { serializeBeatmapId, serializeMods } from './serialize';

describe(__filename, () => {
   test('serializeBeatmapPath', () => {
      expect(serializeBeatmapId(129891)).toEqual('osu 129891');
   });

   test('serializeMods', () => {
      expect(serializeMods([])).toEqual('');
      expect(serializeMods(['HR'])).toEqual('-m:HR');
      expect(serializeMods(['HD', 'DT'])).toEqual('-m:HD -m:DT');
   });
});
