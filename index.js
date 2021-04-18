const Eris = require('eris')
require('dotenv').config()

const token = process.env.DISCORD_BOT_TOKEN
const channelId = process.env.CHANNEL_ID

const bot = new Eris(token)

bot.on('ready', () => {
  console.log('Ready!')
})

bot.on('voiceChannelJoin', (member, newChannel) => {
  console.log('%s が %s に入室しました。', member.username, newChannel.name)
  bot.createMessage(
    channelId,
    `${member.username}が${newChannel.name}に入室しました`
  )
})

bot.on('voiceChannelLeave', (member, oldChannel) => {
  console.log('%s が %s を退室しました。', member.username, oldChannel.name)
  bot.createMessage(
    channelId,
    `${member.username}が${oldChannel.name}を退室しました。`
  )
})

bot.connect()
