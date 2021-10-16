import { executeSimulateTaiko } from './taiko';
import type { SimulateTaikoPayload } from '../../../base/types';

describe(__filename, () => {
   test('executeSimulateTaiko', async () => {
      const payload: SimulateTaikoPayload = {
         beatmapId: 1569934,
      };
      const result = await executeSimulateTaiko(payload);

      expect(result).toHaveProperty('pp');
      expect(result.pp).toBeGreaterThanOrEqual(0);
   });
});
