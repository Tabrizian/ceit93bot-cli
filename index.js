#!/usr/bin/node --harmony_async_await
const program = require('commander');
const pkg = require('./package.json');
const ceit93bot = require('./ceit93bot');

program
    .version(pkg.version)
    .command('send')
    .option('-f, --file [file]', 'Sends specified file to channel')
    .option('-m, --message [message]', 'Sends specified message to channel')
    .action(async (options) => {
        if (options.file) {
            try {
                await ceit93bot.sendDocument(options.file);
            } catch(e) {
                console.log(e);
            }
        }
        if(options.message) {
            try {
                await ceit93bot.sendMessage(options.message);
            } catch(e) {
                console.log(e);
            }
        }
    });


program.parse(process.argv);
if (program.args.length === 0) program.help();
