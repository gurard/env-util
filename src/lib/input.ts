'use strict';

import * as promptSync from 'prompt-sync';

let promptConfig: promptSync.Config = {
    sigint: true,
};

let prompt: promptSync.Prompt = promptSync(promptConfig);

export const getInput = (input:string) => {
    let response: string = '';

    try {
        response = prompt(input);
    } catch (error) {
        console.error('could not read input')
    }

    return response;
}