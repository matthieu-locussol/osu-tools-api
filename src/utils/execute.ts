import { exec } from 'child_process';

export const execute = (command: string): Promise<string> => {
   const promise = new Promise<string>((resolve, reject) => {
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
