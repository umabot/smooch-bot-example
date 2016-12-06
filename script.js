'use strict';
const Script = require('smooch-bot').Script;
module.exports = new Script({
	processing: {
		prompt: (bot) => bot.say('Beep boop...'),
		receive: () => 'processing'
	},
	start: {
		receive: (bot) => {
			return bot.say('Hi! I\'m Silvio\'s Bot! I can answer questions about Silvio\'s career')
				.then(() => 'askName');
		}
	},
	askName: {
		prompt: (bot) => bot.say('What\'s your name?'),
		receive: (bot, message) => {
			const name = message.text;
			return bot.setProp('name', name)
				.then(() => bot.say(`Great! I'll call you ${name}
Is that OK?`))
				.then(() => 'askExperience1990');
		}
	},
	askExperience1990: {
		prompt: (bot) => bot.say('Silvio started as a programmer in Telecom Argentina in the early 90s \nDeveloping network assignment software and billing. From there he took the opportunity to start working as a consultant in PeopleSoft'),
    receive: (bot, message) => {
			const name = message.text;
			return bot.setProp('name', name)
				.then(() => bot.say(`Great! I'll tell you what he did next
Is that OK?`))
				.then(() => 'askExperience2000');
		}
	},
  
	askExperience2000: {
		prompt: (bot) => bot.say('PeopleSoft were her first year as a technical pre sales\nAnd in 2000 he accepted the offer to start a regional role as pre sales for Epiphany LATAM with Chris Ciauri'),
    receive: (bot, message) => {
			const name = message.text;
			return bot.setProp('name', name)
				.then(() => bot.say(`Great! I'll tell you what he did next
Is that OK?`))
				.then(() => 'askExperience2004');
		}
	},
  
  
	askExperience2004: {
		prompt: (bot) => bot.say('In 2004 a previous colleague from PeopleSoft asked him to come to EDS\nHe morphed the traditional role of SA in EDS into pre sales to renegotiate a 10 million USD deal\nAnd also started the BI practice in EDS Argentina'),
    receive: (bot, message) => {
			const name = message.text;
			return bot.setProp('name', name)
				.then(() => bot.say(`Great! I'll tell you what he did next
Is that OK?`))
				.then(() => 'askExperience2008');
		}
	},

	askExperience2008: {
		prompt: (bot) => bot.say('In 2008 he decided to follow her spouse to Asia. And work from Singapore for Infor as pre sales for CRM division\nLoved Asia and Australia, but too much travel and decided in 2011 to work for Freebalance and deploy datacenters and FMIS for East Timor gov\nAnd became Master Scuba Diver'),
    receive: (bot, message) => {
			const name = message.text;
			return bot.setProp('name', name)
				.then(() => bot.say(`Great! I'll tell you what he did next
Is that OK?`))
				.then(() => 'askExperience2013');
		}
	},
  
	askExperience2013: {
		prompt: (bot) => bot.say('After a brief period in Malta, to became PRINCE2, Diving Instructor and Tech50 certified, he got a SE job in Salesforce\nAnd here he is\nBecoming an MSE and planning for her next career move: DTA in Salesforce'),
    receive: (bot, message) => {
			const name = message.text;
			return bot.setProp('name', name)
				.then(() => 'finish');
		}
	},
  
  
	finish: {
		receive: (bot, message) => {
			return bot.getProp('name')
				.then((name) => bot.say(`Sorry ${name}, my creator didn't ` +
					'teach me how to do anything else!'))
				.then(() => 'finish');
		}
	}
});
