import { execute } from './execute';

describe(__filename, () => {
   test('execute', async () => {
      const samples = [
         ['echo "example"', 'example\n'],
         ['echo "Downloading...\nexample"', 'example\n'],
      ];

      samples.forEach(async ([input, output]) => {
         const result = await execute(input);
         expect(result).toEqual(output);
      });
   });
});
