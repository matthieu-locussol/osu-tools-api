import { executeSimulateCatch } from './catch';
import type { SimulateCatchPayload } from '../../../base/types';

describe(__filename, () => {
   test('executeSimulateCatch', async () => {
      const payload: SimulateCatchPayload = {
         beatmapId: 1116202,
      };
      const result = await executeSimulateCatch(payload);

      expect(result).toHaveProperty('pp');
      expect(result.pp).toBeGreaterThanOrEqual(0);
   });
});
