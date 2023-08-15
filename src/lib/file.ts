'use strict';

import { ISecret } from './interfaces';
import * as fs from 'fs';
const readline = require('readline');  

export const parseFile = async (filepath: string): Promise<ISecret[]> => {
    let secrets: Array<ISecret> = new Array<ISecret>();

    const fileStream = fs.createReadStream(filepath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });


    for await (const line of rl) {
        let secretSplit = (line as string).split('=');
        secrets.push({
            key: secretSplit[0],
            value: secretSplit[1]
        });
    }

    return secrets;
}