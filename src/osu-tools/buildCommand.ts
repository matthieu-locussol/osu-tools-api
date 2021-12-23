export type CommandType = 'simulate' | 'profile';

export const buildCommand = (
   type: CommandType,
   path: string,
   configuration: string,
   args: string,
): string => {
   const command = [
      `/usr/share/dotnet/dotnet run`,
      `--project ${path}`,
      `--configuration ${configuration}`,
      `-- ${type} ${args}`,
      `--json`,
   ].join(' ');

   return command;
};
