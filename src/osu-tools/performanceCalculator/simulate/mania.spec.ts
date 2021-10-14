import { executeSimulateMania } from './mania';
import type { SimulateManiaPayload } from '../../../base/types';

describe(__filename, () => {
   test('executeSimulateMania', async () => {
      const payload: SimulateManiaPayload = {
         beatmapId: 706049,
      };
      const result = await executeSimulateMania(payload);

      expect(result).toHaveProperty('pp');
      expect(result.pp).toBeGreaterThanOrEqual(0);
   });
});
