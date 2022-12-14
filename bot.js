const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const token = process.env['token']
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === 'test') {
    await interaction.reply('Angello is testing this bot');
  }
    else if (interaction.commandName === 'channel') {
    await interaction.reply('https://www.youtube.com/channel/UCf0gNXouqCQGBCv_KlyKSDQ');
  }
});

client.login(token);