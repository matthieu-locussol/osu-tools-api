import { exec } from 'child_process';

export const execute = (command: string): Promise<unknown> => {
   const promise = new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
         if (error !== null) {
            console.error('Error: ', stderr);
            reject(error);
         } else {
            resolve(stdout);
         }
      });
   });

   return promise;
};
