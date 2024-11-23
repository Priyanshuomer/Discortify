const {Client,GatewayIntentBits} = require("discord.js");

const client = new Client({
    intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return ;

    message.reply({
        content:"hey from bot"
    });
});

client.on("interactionCreate",(interaction) => {
    console.log(interaction);
    interaction.reply("helloo interactions !!!")
});

client.login("###");












