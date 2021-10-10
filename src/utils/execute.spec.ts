import { execute } from './execute';

describe(__filename, () => {
   test('execute', async () => {
      const result = await execute('echo "example"');
      expect(result).toEqual('example\n');
   });
});
