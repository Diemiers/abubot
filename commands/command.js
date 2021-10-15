const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { joinVoiceChannel } = require('@discordjs/voice');
const {createAudioPlayer} = require('@discordjs/voice');
const {createAudioResource} = require('@discordjs/voice');
//Global queue for your bot. Every server will have a key and value pair in this map. { guild.id, queue_constructor{} }
let index = 0;



module.exports = {
    name: 'play',
    aliases: ['skip', 'stop'], //We are using aliases to run the skip and stop command follow this tutorial if lost: https://www.youtube.com/watch?v=QBUJ3cdofqc
    cooldown: 0,
    description: 'Advanced music bot',
    async execute(message,args, cmd, client, Discord){


        //Checking for the voicechannel and permissions (you can add more permissions if you like).
  
        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('Ты чё даун?');
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('ладно');
        if (!permissions.has('SPEAK')) return message.channel.send('ладно');


    
            
            
        //This is our server queue. We are getting this server queue from the global queue.
     
        //If the user has used the play command
        if (cmd === '-play'){
            if (!args.length) return message.channel.send('You need to send the second argument!');
            let song = {};

            //If the first argument is a link. Set the song object to have two keys. Title and URl.
          console.log(args[0],"Args 0");
            if (ytdl.validateURL(args[0])) {
              console.log("Link detected");
                const song_info = await ytdl.getInfo(args[0]);
                song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
            } else {
                //If there was no link, we use keywords to search for a video. Set the song object to have two keys. Title and URl.
                const video_finder = async (query) =>{
                    const video_result = await ytSearch(query);
                    return (video_result.videos.length > 1) ? video_result.videos[0] : null;
                }
console.log("Words detected");
                const video = await video_finder(args.join(' '));
                if (video){
                    song = { title: video.title, url: video.url }
                } else {
                     message.channel.send('Иди нахуй дебил');
                }
            }

            const connection = joinVoiceChannel({
	channelId: voice_channel.id,
	guildId: voice_channel.guild.id,
	adapterCreator: voice_channel.guild.voiceAdapterCreator,
});

index = index+1;
const player = createAudioPlayer();
const stream = ytdl(song.url, { filter: 'audioonly' });         
const resource = createAudioResource(stream);
player.play(resource);       
const subscription = connection.subscribe(player);
          
message.channel.send("**HALAL ACCEPTED** "+ song.url + ' **'+ index + '** CURRENT INDEX' );
       
            //If the server queue does not exist (which doesn't for the first video queued) then create a constructor to be added to our global queue.
  
   
    
}
}
}

// subscription could be undefined if the connection is destroyed!

  
