import { exec } from 'child_process';

export const execute = (command: string): Promise<unknown> => {
   const promise = new Promise((resolve, reject) => {
      exec(command, (error, stdout) => {
         if (error !== null) {
            reject(error);
         } else {
            resolve(stdout);
         }
      });
   });

   return promise;
};
