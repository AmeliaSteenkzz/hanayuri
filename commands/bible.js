const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 let replies = ["When she carried on her prostitution openly and exposed her naked body, I turned away from her in disgust, just as I had turned away from her sister. 19 Yet she became more and more promiscuous as she recalled the days of her youth, when she was a prostitute in Egypt. 20 There she lusted after her lovers, whose genitals were like those of donkeys and whose emission was like that of horses. 21 So you longed for the lewdness of your youth, when in Egypt your bosom was caressed and your young breasts fondled.", "Revelation 2:23: And I will kill her children with death; and all the churches shall know that I am he which searcheth the reins and hearts: and I will give unto every one of you according to your works.", "I do not permit a woman to teach or to have authority over a man; she must be silent. (1 Timothy 2:12)", "This is what the Lord Almighty says... ‘Now go and strike Amalek and devote to destruction all that they have. Do not spare them, but kill both man and woman, child and infant, ox and sheep, camel and donkey. (1 Samuel 15:3)", "Do not allow a sorceress to live. (Exodus 22:18)", "Happy is he who repays you for what you have done to us – he who seizes your infants and dashes them against the rocks.(Psalm 137:9)", "So the man took his concubine and sent her outside to them, and they raped her and abused her throughout the night, and at dawn they let her go. At daybreak the woman went back to the house where her master was staying, fell down at the door and lay there until daylight. When her master got up in the morning and opened the door of the house and stepped out to continue on his way, there lay his concubine, fallen in the doorway of the house, with her hands on the threshold. He said to her, ‘Get up; let’s go.’ But there was no answer. Then the man put her on his donkey and set out for home. (Judges 19:25-28)", "In the same way also the men, giving up natural intercourse with women, were consumed with passion for one another. Men committed shameless acts with men and received in their own persons the due penalty for their error. (Romans 1:27)", "And Jephthah made a vow to the Lord, and said, ‘If you will give the Ammonites into my hand, then whoever comes out of the doors of my house to meet me, when I return victorious from the Ammonites, shall be the Lord’s, to be offered up by me as a burnt-offering.’ Then Jephthah came to his home at Mizpah; and there was his daughter coming out to meet him with timbrels and with dancing. She was his only child; he had no son or daughter except her. When he saw her, he tore his clothes, and said, ‘Alas, my daughter! You have brought me very low; you have become the cause of great trouble to me. For I have opened my mouth to the Lord, and I cannot take back my vow.’ (Judges 11:30-1, 34-5)", "Take your son, your only son Isaac, whom you love, and go to the land of Moriah, and offer him there as a burnt-offering on one of the mountains that I shall show you. (Genesis 22:2)", "Wives, submit to your husbands as to the Lord. (Ephesians 5:22)", "Slaves, submit yourselves to your masters with all respect, not only to the good and gentle but also to the cruel. (1 Peter 2:18)", "No one whose testicles are crushed or whose male organ is cut off shall enter the assembly of the Lord. (Deuteronomy 23:1)", "Thou shalt not plow with an ox and an ass together. (Deuteronomy 22:10)", "And the LORD opened the mouth of the ass, and she said unto Balaam, What have I done unto thee, that thou hast smitten me these three times? And Balaam said unto the ass, Because thou hast mocked me: I would there were a sword in mine hand, for now would I kill thee. And the ass said unto Balaam, Am not I thine ass, upon which thou hast ridden ever since I was thine unto this day? was I ever wont to do so unto thee? And he said, Nay. (Numbers 22:28-30)"];
  let result = Math.floor((Math.random() * replies.length));

  let ballembed = new Discord.RichEmbed()
  .setColor("#af0e97")
  .addField("The bible says", replies[result])

  message.channel.send(ballembed);
}

module.exports.help = {
  name: "bible"
}
