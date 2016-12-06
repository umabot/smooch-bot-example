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
Is that OK? %[Yes](postback:yes) %[No](postback:no)`)) 
.then(() => 'askExperience1990'); 
} 
}, 
askExperience1990: { 
prompt: (bot) => bot.say('Do you want to know how Silvio started in IT?'), 
receive: (bot, message) => { 
const yesno = message.text; 
return bot.setProp('name', name) 
.then(() => bot.say(`Great! I'll call you ${name}
Is that OK? %[Yes](postback:yes) %[No](postback:no)`)) 
.then(() => 'askExperience'); 
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
