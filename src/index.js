// import §Koa  from 'koa';
import dotenv from 'dotenv';
import Telegraf from 'telegraf';

// import {PORT} from '../config/index.js';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log('Response time: %sms', ms)
})

bot.catch((err, ctx) => {
  console.log(`Ooops, ecountered an error for ${ctx.updateType}`, err)
})

bot.start(ctx => {
  ctx.reply('Welcome');
});
bot.launch();
