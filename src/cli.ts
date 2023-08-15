'use strict';

import * as output from './lib/output';
import * as input from './lib/input';
import * as file from './lib/file';

export async function cli() {
    // header text
    output.printLineStar();
    output.printLineTextHeader('env-util');

    // fetch filepath to config file
    let filepath: string = input.getInput('enter path of file to import: ');
    
    let fileContents = await file.parseFile(filepath);

    console.log('file contents', fileContents);

}