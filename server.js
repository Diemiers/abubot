

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [32509]});


console.log(Intents.FLAGS.GUILDS)
console.log(Intents.FLAGS.GUILD_MESSAGES)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  
});

client.on('messageCreate',  (message) => {

  
let args = message.content.split(" ");


if (args[0]=== "-play") {
  let args1 = [];
  let i
  for (i = 1; i < args.length; i++) {
    console.log(args[i],i)
    args1[i] = args[i];
        }
let comma = require('./commands/command.js')
comma.execute(message,args1,args[0],client);
}
  
});


client.login('ODk3OTE2NTk3MjMzMTQ3OTU0.YWcn_w.MwlxFkGw2cYqW4Illja5THwOUIQ');

