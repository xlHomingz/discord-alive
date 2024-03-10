const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);
client.user.setActivity(`${config.prefix}gen │ ${config.servername}`, { type: "STREAMING", url: "https://twitch.tv/wtcn" });
bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
