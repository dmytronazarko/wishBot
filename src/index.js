// import §Koa  from 'koa';
import dotenv from 'dotenv';
import Telegraf from 'telegraf';

// import {PORT} from '../config/index.js';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => {
  // console.log(ctx);

  ctx.reply('Welcome');
});
bot.launch();
