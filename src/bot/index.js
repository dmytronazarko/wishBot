import Telegraf from 'telegraf';

import config from '../config';
import userService from '../services/user';

const bot = new Telegraf(config.botToken);

bot.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log('Response time: %sms', ms);
});

const customMethods = {
  getUser: function() {
    return this.message.from;
  }
};
Object.assign(bot.context, customMethods);

bot.catch((err, ctx) => {
  console.log(`Ooops, ecountered an error for ${ctx.updateType}`, err);
});

bot.start(async ctx => {
  let user = await userService.get(ctx.from.id);
  if (!user) {
    const { id, username, first_name, last_name } = ctx.message.from;
    user = await await userService.create({
      tgId: id,
      username,
      firstName: first_name,
      lastName: last_name
    });
  }

  ctx.reply(`Welcome ${user.firstName} ${user.lastName}`);
});

export default bot;
