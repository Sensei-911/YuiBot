const Discord = require('discord.js');
module.exports = {
    name: "edit",
    description: "Kategori oluşturur",
    execute(client, message, args) {
  if (!message.member.hasPermission("ADMINISTRATOR")) return 
  let mesajid = args[0];
  let yenimesaj = args.slice(1).join(" ");
  if (yenimesaj.length < 1) return message.channel.send("Örnek kullanım ck!edit <mesajid> <yeni mesaj>").then(b =>{b.delete({timeout:5000})})
  message.channel.messages.fetch({ around: mesajid, limit: 1 }).then(msg => {
    const mesaj = msg.first();
    mesaj.edit(yenimesaj);
    message.react("✅");
    
})}}