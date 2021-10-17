import { getStderrError } from '../base/errors';
import { exec } from 'child_process';

export const execute = (command: string): Promise<string> => {
   const promise = new Promise<string>((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
         if (error !== null) {
            console.error(error);
            reject(getStderrError(stderr));
         }
         // When there is a cache-miss, osu-tools downloads the map and output a line in stdout.
         // We need to remove this line to parse only the JSON output.
         else if (stdout.startsWith('Downloading')) {
            const output = stdout.split('\n').slice(1).join('\n');
            resolve(output);
         }
         // When there is a profile command, osu-tools writes three messages:
         //     Getting access token...
         //     Getting user data...
         //     Getting user top scores...
         // Then, it prints on stdout a "Download xxx" message for every cache-miss.
         // We need to remove these lines to parse only the JSON output.
         else if (stdout.startsWith('Getting access token')) {
            const output = stdout.split('\n').reverse()[0];
            resolve(output);
         } else {
            resolve(stdout);
         }
      });
   });

   return promise;
};
