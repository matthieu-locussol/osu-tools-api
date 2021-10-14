import { executeSimulate } from './simulate';
import type { SimulatePayload } from './types';

describe(__filename, () => {
   test('executeSimulate', async () => {
      const samples: [SimulatePayload, string][] = [
         [
            {
               beatmapId: 129891,
            },
            'pp',
         ],
         [
            {
               beatmapId: 'fail' as unknown as number,
            },
            'error',
         ],
      ];

      samples.forEach(async ([input, output]) => {
         const result = await executeSimulate(input);
         expect(result).toHaveProperty(output);
      });
   });
});
