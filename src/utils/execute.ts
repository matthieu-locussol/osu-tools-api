import { exec } from 'child_process';

export const execute = (command: string): Promise<string> => {
   const promise = new Promise<string>((resolve, reject) => {
      exec(command, (error, stdout) => {
         if (error !== null) {
            reject(error);
         }
         // When there is a cache-miss, osu-tools downloads the map and output a line in stdout.
         // We need to remove this line to parse only the JSON output.
         else if (stdout.startsWith('Downloading')) {
            const output = stdout.split('\n').slice(1).join('\n');
            resolve(output);
         } else {
            resolve(stdout);
         }
      });
   });

   return promise;
};
