#!/usr/bin/env node
var child_process=require("child_process");
const os = require('os');
var path = require('path')
if (os.type() == 'Windows_NT') {
    //windows
    child_process.execSync('start ' + path.resolve(__dirname + '/watch.exe'),{stdio: 'inherit'})
} else {
    child_process.execSync(path.resolve(__dirname + '/watch'),{stdio: 'inherit'})
}