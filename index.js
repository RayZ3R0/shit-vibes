const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello Peeps.'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(process.env['bottoken']);
