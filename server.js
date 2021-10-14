const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {

  console.log("Interacted");

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});


client.login('ODk3OTE2NTk3MjMzMTQ3OTU0.YWcn_w.MwlxFkGw2cYqW4Illja5THwOUIQ');