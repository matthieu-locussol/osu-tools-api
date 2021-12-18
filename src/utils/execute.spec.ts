import { execute } from './execute';

describe(__filename, () => {
   test('execute', async () => {
      const samples = [
         ['echo -n "example"', 'example'],
         ['echo -n "Downloading...\nexample"', 'example'],
      ];

      for (const [input, output] of samples) {
         const result = await execute(input);
         expect(result).toEqual(output);
      }
   });
});
