const client = require('nekos.life');
const { nsfw } = new client();
module.exports = {
name: 'blowjob',
description: 'Sends random blow job pictures.',
async execute(yui, message, args) {
if(message.channel.nsfw === false) return message.channel.send({embed: { title:'NSFW not allowed here', description:'Use NSFW commands in a NSFW marked channel!', image: { url:'https://i.imgur.com/oe4iK5i.gif'}, color:'RANDOM'}})
const blowJob = await nsfw.blowJob()
message.channel.send({embed: { title: 'Here, take some blow job.', color: 'RED', image: { url: blowJob.url }, footer: { text: `Requested by ${message.author.tag}`}, timestamp: new Date()}})
}}