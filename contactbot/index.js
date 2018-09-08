const telegraf = require('telegraf')
const data = require('./data')
const bot = new telegraf(data.token)

bot.start((ctx) => {
  ctx.reply(hello, {reply_markup: {inline_keyboard: [[{text: '🇬🇧 Change lang', callback_data: 'en'}]]}})
})

bot.on('text', (ctx) => {
  bot.forwardMessage(data.myid, ctx.from.id, ctx.message.id)
})

var hello = 'Здравствуйте! Я — бот-ассистент Сардора, которому Вы собираетесь написать. Оставьте свое сообщение и он свяжется с Вами, как только сможет.'

bot.startPolling()
