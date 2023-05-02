#!/usr/bin/node

import configs from './configs.js';
import { Telegraf } from 'telegraf';
import { db } from './db.js';

const bot = new Telegraf(configs.botToken);

bot.start(async ctx => {
  await db.read();
  await ctx.reply('Welcome');
});

bot.command('run', async ctx => {
  await ctx.reply('The watcher is running');
});

bot.command('stop', async ctx => {
  await ctx.reply('The watcher has been stopped');
});

bot.command('report', async ctx => {
  const userOne = db.chain.get('users');
  await ctx.reply(JSON.stringify(userOne, undefined, 1));
});

await bot.launch();

process.once('SIGINT', () => {
  bot.stop('SIGINT');
});

process.once('SIGTERM', () => {
  bot.stop('SIGTERM');
});
