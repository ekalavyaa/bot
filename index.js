var Botkit = require('botkit');
var controller = Botkit.slackbot({
	clientId: "149894543478.148541636241",
    clientSecret:"0abf808c3cede009894fd27e7353cb96",
});
var bot = controller.spawn({
  token: "xoxb-148543617041-cPd9hNdQylRB0lhBrH0cDyCb"
});
controller.hears(["hi"],["direct_message","mention","direct_mention","ambient"], function(bot, message){
	console.log(message);
	bot.reply(message, "hello World");
});
bot.startRTM(function(err, bot, payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});

// some time later (e.g. 10s) when finished with the RTM connection and worker