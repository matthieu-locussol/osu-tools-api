import 'dotenv/config';
import { executeProfile } from './profile';
import type { ProfilePayload } from '../../../base/types';

describe(__filename, () => {
   test('executeProfile', async () => {
      const payload: ProfilePayload = {
         userId: 3053420,
      };
      const result = await executeProfile(payload);

      expect(result).toHaveProperty('LivePp');
      expect(result.LivePp).toBeGreaterThanOrEqual(0);
   });
});
