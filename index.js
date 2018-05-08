const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '416125571:AAHzckK4qQwWU0c5u2AkUxS10ZsmRj7rkHk'

const bot = new TelegramBot(TOKEN, {polling: true})

if message.text = 'salom'{
bot.on('message', msg => {
bot.sendMessage(msg.chat.id,'Husniddindan salom.')
}})
