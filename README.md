# env-util

This is a basic tool that can be used to set environment variables with a prepared file.

## Set up the app cli

```bash
# run command
npm run package

# this npm script bundles commands:
# npm install
# npm run build
# npm link
```

## Prepare file to import

A text file will be used to import. Key-value-pairs must be delimited with an equals sign (=).

Example:

TEST=hello world

An environment variable will be created with key "TEST" and value "hello world".

## Using the app

```bash

$ env-util
******************************************
                                         _     _   _
   ___   _ __   __   __          _   _  | |_  (_) | |
  / _ \ | '_ \  \ \ / /  _____  | | | | | __| | | | |
 |  __/ | | | |  \ V /  |_____| | |_| | | |_  | | | |
  \___| |_| |_|   \_/            \__,_|  \__| |_| |_|


$ enter path of file to import: C:\Users\e5z7swz\Desktop\test.txt
parsing file...
parsing file complete
setting environment variables...
succesfully set TEST

```
