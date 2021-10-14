import { executeSimulateOsu } from './osu';
import type { SimulateOsuPayload } from '../../../base/types';

describe(__filename, () => {
   test('executeSimulateOsu', async () => {
      const payload: SimulateOsuPayload = {
         beatmapId: 129891,
      };
      const result = await executeSimulateOsu(payload);

      expect(result).toHaveProperty('pp');
      expect(result.pp).toBeGreaterThanOrEqual(0);
   });
});
