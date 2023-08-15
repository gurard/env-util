'use strict';

import { exec } from 'child_process';
import { ISecret } from './interfaces';
import { stderr, stdout } from 'process';

export const setEnvironmentVariables = (secrets: Array<ISecret>) => {
    secrets.forEach(async (secret: ISecret) => {
        let command = `setx ${secret.key} ${secret.value}`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`unable to set ${secret.key}`);
                console.log(`error: ${error.message}`);
                return;
              }
              if (stderr) {
                console.error(`unable to set ${secret.key}`);
                console.log(`stderr: ${stderr}`);
                return;
              }
              if (stdout) {
                console.log(`succesfully set ${secret.key}`);
              }
        });

        await new Promise((r) => setTimeout(r, 2000));
    })
}