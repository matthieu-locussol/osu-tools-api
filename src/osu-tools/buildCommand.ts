export type CommandType = 'simulate';

export const buildCommand = (
   type: CommandType,
   path: string,
   configuration: string,
   args: string,
): string => {
   const command = [
      `dotnet run`,
      `--project ${path}`,
      `--configuration ${configuration}`,
      `-- ${type} ${args}`,
      `--json`,
   ].join(' ');

   return command;
};
