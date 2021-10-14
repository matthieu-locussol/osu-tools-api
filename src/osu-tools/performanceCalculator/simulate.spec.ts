import { executeSimulate } from './simulate';
import type { SimulatePayload } from './types';

describe(__filename, () => {
   test('executeSimulate', async () => {
      const payload: SimulatePayload = {
         beatmapId: 129891,
      };
      const result = await executeSimulate(payload);

      expect(result).toHaveProperty('pp');
   });
});
