

//const { Client, Intents } = require('discord.js');
//const client = new Client({ intents: [32509]});

var msgal = require("./websitebackend.js");
msgal();
/*
var msgal = require("./websitebackend.js");
msgal();
//[[
console.log(Intents.FLAGS.GUILDS)
console.log(Intents.FLAGS.GUILD_MESSAGES)


client.on('ready', () => {


  console.log(`Logged in as ${client.user.tag}!`);

});


 
let can = true;

client.on('messageCreate',  (message) => {

  

let args = message.content.split(" ");


if (args[0]=== "-play") {
  let args1 = [];
  let i
  for (i = 1; i < args.length; i++) {
    console.log(args[i],i-1)
    args1[i-1] = args[i];
        }
let comma = require('./commands/command.js')
comma.execute(message,args1,args[0],client);
}
  
if (args[0]==="-msg"){
    let args1 = [];
  let i
  for (i = 1; i < args.length; i++) {
    console.log(args[i],i-1)
    args1[i-1] = args[i];
    
    
        }
   message.channel.send(args1.join(" "));
  message.delete();
  
  
} 
 
  
  
if ((args[0] === "-sus")  &&  can   ){
  can = false;
    var i = -1;                 
  const names = ["Abu Navalniy","Bin Ladin","El Travomano","Doka2Fan","Saddam Hussein"]
   
function myLoop() {        
  setTimeout(function() {   
      i = i+1;
    console.log(names[i]); 
    message.guild.me.setNickname(names[i])
    if ((i === names.length-1) ){   
       i = -1;
    }
    myLoop();          
  }, 15000)
}
myLoop(); 
  
  
}
  
});



//]]

*/















//client.login('ODk3OTE2NTk3MjMzMTQ3OTU0.YWcn_w.MwlxFkGw2cYqW4Illja5THwOUIQ');

