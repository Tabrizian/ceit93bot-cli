const axios = require('axios');
const config = require('config');

let instance = axios.create({
    baseURL: `https://api.telegram.org/bot${config.get('bot.hash')}`
});

module.exports = instance;
