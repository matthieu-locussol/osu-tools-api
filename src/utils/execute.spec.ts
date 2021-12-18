import { execute } from './execute';

describe(__filename, () => {
   test('execute', async () => {
      expect(() => execute('echo -n "example"')).toThrow();
      expect(() => execute('dotnet run --project sample --json')).not.toThrow();
   });
});
