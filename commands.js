const { REST, Routes } = require('discord.js'); 

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

async function registerCommands()
{

const rest = new REST({ version: '10' }).setToken("##");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1304520186992525342"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
}


registerCommands();

