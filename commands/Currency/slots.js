//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const Discord = require('discord.js');
const moving = '<a:slots:780710595900211210>'
const slots = ['<:kalp:780716391782416414>','<:kiraz:780716959066619925>','<:patlican:780717213580787713>','<:o_:782770547552944181>','<:currency:782770162675351565>','<:w_:782769875907117067>'];
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
module.exports = {
 name: 'slots',
 description: 'Play slots game.',
 execute(client, message, args) {
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var slot1 = slots[Math.floor(Math.random() * slots.length)];
var slot2 = slots[Math.floor(Math.random() * slots.length)];
var slot3 = slots[Math.floor(Math.random() * slots.length)];
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
if (slot1 === slot2 && slot1 === slot3) {
message.channel.send(`\`___SLOTS___\`\n${moving+moving+moving}\n\`|         |\`\n\`|         |\``).then(a => a.edit(`\`___SLOTS___\`\n${slot1} ${slot2} ${slot3}  **Win**\n\`|         |\`\n\`|         |\``))}
else {
message.channel.send(`\`___SLOTS___\`\n${moving+moving+moving}\n\`|         |\`\n\`|         |\``).then(b => b.edit(`\`___SLOTS___\`\n${slot1} ${slot2} ${slot3}  **Loose**\n\`|         |\`\n\`|         |\``))}

}}