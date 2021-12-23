import { buildCommand } from './buildCommand';

describe(__filename, () => {
   test('buildCommand', () => {
      expect(buildCommand('simulate', 'path', 'config', 'args')).toEqual(
         '/usr/share/dotnet/dotnet run --project path --configuration config -- simulate args --json',
      );
   });
});
