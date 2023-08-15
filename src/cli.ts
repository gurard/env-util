'use strict';

import * as output from './lib/output';
import * as input from './lib/input';
import * as file from './lib/file';
import * as env from './lib/environment'

export async function cli() {
    // header text
    output.printLineStar();
    output.printLineTextHeader('env-util');

    // prompt for filepath
    let filepath: string = input.getInput('enter path of file to import: ');
    

    // parse file
    output.printLine('parsing file...');
    let fileContents = await file.parseFile(filepath);
    output.printLine('parsing file complete');

    // set environment variables
    output.printLine('setting environment variables...');
    env.setEnvironmentVariables(fileContents);
    output.printLine('setting environment variables complete');
}