const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});
client.login(config.token);