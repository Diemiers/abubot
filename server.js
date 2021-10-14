const Discord =require("discord.js");

const intents = new Discord.Intents(8589934591);
const client = new Discord.Client({intents});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {

  console.log(message)
  
});

client.login('ODk3OTE2NTk3MjMzMTQ3OTU0.YWcn_w.MwlxFkGw2cYqW4Illja5THwOUIQ');