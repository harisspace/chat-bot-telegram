const {Telegraf} = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(async (ctx, next) => {
  const start = new Date() 
  await next()
  const responseTime = new Date() - start
  const chatFrom = `${ctx.message.chat.first_name} (id: ${ctx.message.chat.id})`
  console.log(`chat from ${chatFrom} (Response time: ${responseTime})`)
})

bot.hears('Assalamualaikum', (ctx) => ctx.reply('Waalaikumussalam'))
bot.hears('hello', (ctx) => ctx.reply('hello again 😊'))
bot.launch()