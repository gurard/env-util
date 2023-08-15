'use strict';

import * as output from './lib/output';
import * as input from './lib/input';

export function cli() {
    // header text
    output.printLineStar();
    output.printLineTextHeader('env-util');

    // fetch filepath to config file
    let filepath: string = input.getInput('enter filepath');
    
}