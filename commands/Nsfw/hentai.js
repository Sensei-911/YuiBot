const Discord = require('discord.js');
var hentais = [
"https://wetgif.com/wp-content/uploads/hentai-1.gif",
"https://wetgif.com/wp-content/uploads/hentai-2.gif",
"https://wetgif.com/wp-content/uploads/hentai-3.gif",
"https://wetgif.com/wp-content/uploads/hentai-4.gif",
"https://wetgif.com/wp-content/uploads/hentai-7.gif",
"https://wetgif.com/wp-content/uploads/hentai-8.gif",
"https://wetgif.com/wp-content/uploads/hentai-9.gif",
"https://wetgif.com/wp-content/uploads/hentai-11.gif",
"https://wetgif.com/wp-content/uploads/hentai-12.gif",
"https://wetgif.com/wp-content/uploads/hentai-13.gif",
"https://wetgif.com/wp-content/uploads/hentai-14.gif",
"https://wetgif.com/wp-content/uploads/hentai-15.gif",
"https://wetgif.com/wp-content/uploads/hentai-16.gif",
"https://wetgif.com/wp-content/uploads/hentai-17.gif",
"https://wetgif.com/wp-content/uploads/hentai-18.gif",
"https://wetgif.com/wp-content/uploads/hentai-19.gif",
"https://wetgif.com/wp-content/uploads/hentai-20.gif",
"https://wetgif.com/wp-content/uploads/hentai-21.gif",
"https://wetgif.com/wp-content/uploads/hentai-23.gif",
"https://wetgif.com/wp-content/uploads/hentai-24.gif",
"https://wetgif.com/wp-content/uploads/hentai-26.gif",
"https://wetgif.com/wp-content/uploads/hentai-27.gif",
"https://wetgif.com/wp-content/uploads/hentai-28.gif",
"https://wetgif.com/wp-content/uploads/hentai-29.gif",
"https://wetgif.com/wp-content/uploads/hentai-30.gif",
"https://wetgif.com/wp-content/uploads/hentai-32.gif",
"https://wetgif.com/wp-content/uploads/hentai-33.gif",
"https://wetgif.com/wp-content/uploads/hentai-34.gif",
"https://wetgif.com/wp-content/uploads/hentai-35.gif",
"https://wetgif.com/wp-content/uploads/hentai-36.gif",
"https://wetgif.com/wp-content/uploads/hentai-37.gif",
"https://wetgif.com/wp-content/uploads/hentai-40.gif",
"https://wetgif.com/wp-content/uploads/hentai-41.gif",
"https://wetgif.com/wp-content/uploads/hentai-42.gif",
"https://wetgif.com/wp-content/uploads/hentai-44.gif",
"https://wetgif.com/wp-content/uploads/hentai-45.gif",
"https://wetgif.com/wp-content/uploads/hentai-46.gif",
"https://wetgif.com/wp-content/uploads/hentai-47.gif",
"https://wetgif.com/wp-content/uploads/hentai-48.gif",
"https://wetgif.com/wp-content/uploads/hentai-49.gif",
"https://wetgif.com/wp-content/uploads/hentai-50.gif",
"https://wetgif.com/wp-content/uploads/hentai-51.gif",
"https://wetgif.com/wp-content/uploads/hentai-53.gif",
"https://wetgif.com/wp-content/uploads/hentai-54.gif",
"https://wetgif.com/wp-content/uploads/hentai-55.gif",
"https://wetgif.com/wp-content/uploads/hentai-57.gif",
"https://wetgif.com/wp-content/uploads/hentai-58.gif",
"https://wetgif.com/wp-content/uploads/hentai-59.gif",
"https://wetgif.com/wp-content/uploads/hentai-60.gif",
"https://wetgif.com/wp-content/uploads/hentai-61.gif",
"https://wetgif.com/wp-content/uploads/hentai-66.gif",
"https://wetgif.com/wp-content/uploads/hentai-68.gif",
"https://wetgif.com/wp-content/uploads/hentai-69.gif",
"https://wetgif.com/wp-content/uploads/hentai-70.gif",
"https://wetgif.com/wp-content/uploads/hentai-71.gif",
"https://wetgif.com/wp-content/uploads/hentai-72.gif",
"https://wetgif.com/wp-content/uploads/hentai-74.gif",
"https://wetgif.com/wp-content/uploads/hentai-75.gif",
"https://wetgif.com/wp-content/uploads/hentai-79.gif",
"https://wetgif.com/wp-content/uploads/hentai-86.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-1.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-3.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-5.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-6.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-8.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-9.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-10.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-13.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-14.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-15.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-17.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-20.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-21.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-22.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-23.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-24.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-25.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-26.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-27.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-28.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-30.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-31.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-33.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-34.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-39.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-40.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-42.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-43.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-44.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-46.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-48.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-50.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-54.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-55.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-56.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-58.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-59.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-61.gif",
"https://wetgif.com/wp-content/uploads/porno-anime-63.gif",
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"https://cdn.boob.bot/hentai/sex10.jpg",
"https://cdn.boob.bot/hentai/sex11.jpg",
"https://cdn.boob.bot/hentai/sex12.jpg",
"https://cdn.boob.bot/hentai/sex13.jpg",
"https://cdn.boob.bot/hentai/sex14.jpg",
"https://cdn.boob.bot/hentai/sex15.jpg",
"https://cdn.boob.bot/hentai/sex16.jpg",
"https://cdn.boob.bot/hentai/sex17.jpg",
"https://cdn.boob.bot/hentai/sex18.jpg",
"https://cdn.boob.bot/hentai/sex19.jpg",
"https://cdn.boob.bot/hentai/sex20.jpg",
"https://cdn.boob.bot/hentai/sex21.jpg",
"https://cdn.boob.bot/hentai/sex22.jpg",
"https://cdn.boob.bot/hentai/sex23.jpg",
"https://cdn.boob.bot/hentai/sex24.jpg",
"https://cdn.boob.bot/hentai/sex25.jpg",
"https://cdn.boob.bot/hentai/sex26.jpg",
"https://cdn.boob.bot/hentai/sex29.jpg",
"https://cdn.boob.bot/hentai/sex30.jpg",
"https://cdn.boob.bot/hentai/sex31.jpg",
"https://cdn.boob.bot/hentai/sex32.jpg",
"https://cdn.boob.bot/hentai/sex33.jpg",
"https://cdn.boob.bot/hentai/sex34.jpg",
"https://cdn.boob.bot/hentai/sex37.jpg",
"https://cdn.boob.bot/hentai/sex38.jpg",
"https://cdn.boob.bot/hentai/sex39.jpg",
"https://cdn.boob.bot/hentai/sex40.jpg",
"https://cdn.boob.bot/hentai/sex41.jpg",
"https://cdn.boob.bot/hentai/sex43.jpg",
"https://cdn.boob.bot/hentai/sex44.jpg",
"https://cdn.boob.bot/hentai/sex45.jpg",
"https://cdn.boob.bot/hentai/sex47.jpg",
"https://cdn.boob.bot/hentai/sex48.jpg",
"https://cdn.boob.bot/hentai/sex49.jpg",
"https://cdn.boob.bot/hentai/sex50.jpg",
"https://cdn.boob.bot/hentai/sex51.jpg",
"https://cdn.boob.bot/hentai/sex52.jpg",
"https://cdn.boob.bot/hentai/sex53.jpg",
"https://cdn.boob.bot/hentai/sex54.jpg",
"https://cdn.boob.bot/hentai/sex55.jpg",

]

module.exports = {
name: 'hentai',
description: 'Sends random hentais.',
execute(client, message, args) {
if (message.channel.nsfw === true) {
const hentai = hentais[Math.floor(Math.random() * hentais.length)-1]
let hentai_embed = new Discord.MessageEmbed()
.setTitle('Here, take some hentai')
.setColor('RED')
.setImage(hentai)
.setFooter(`Requested by ${message.author.tag}`)
.setTimestamp()
message.channel.send(hentai_embed)
}
else {
message.channel.send('This isn\'t a nsfw channel!')
}
}}







