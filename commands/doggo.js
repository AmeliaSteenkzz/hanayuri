const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot,messages,args) => {

  let response = await superagent.get(`https://random.dog/woof.json`);
  let dogembed = new Discord.RichEmbed()

  .setColor("#ff70ff")
  .setTitle("Doggo :dog:")
  .setImage(response.body.url);

  messages.channel.send(dogembed);
}
module.exports.help = {
  name: "doggo"
}