#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const jsonfile = require('jsonfile');


program
    .version(pkg.version)
    .command('send')
    .option('-f, --file [file]', 'Sends specified file to channel')
    .option('-m, --message [message]', 'Sends specified message to channel')
    .action(async (options) => {
        const ceit93bot = require('../ceit93bot');
        let configDir = process.env.NODE_CONFIG_DIR = process.env.HOME + '/.tcli';
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

program
    .version(pkg.version)
    .command('config')
    .option('-h, --bot-hash [bot_hash]', 'Configure the bot hash')
    .option('-b, --bot-username [bot_username]', 'Configure the bot username')
    .option('-c, --channel [channel]', 'Configure the channel that bot works with')
    .action(async (options) => {
        let configDir = process.env.NODE_CONFIG_DIR = process.env.HOME + '/.tcli';
        const config = require('config');
        try {
            if(!fs.existsSync(configDir)) {
                fs.mkdirSync(configDir);
            }
        } catch (e) {
            console.log(e);
        }

        if (options.botHash) {
            _.set(config, 'bot.hash', options.botHash);
        }

        if(options.botUsername) {
            _.set(config, 'bot.username', options.botUsername);
        }

        if(options.channel) {
            _.set(config, 'channel.id', options.channel);
        }

        jsonfile.writeFile(configDir + '/default.json', config, function (err) {
            if(err) {
                console.log(err);
            }
        })


    });



program.parse(process.argv);
if (program.args.length === 0) program.help();
