import Telegram from 'node-telegram-bot-api';
import config from 'config';

const TOKEN = config.get('token');
const VACATION_TEXT = config.get('vacation').join('\n\n');
const bot = new Telegram(TOKEN, { polling: true });


bot.onText(/\/start/, (msg, match) => {
    const id = msg.chat.id;
    bot.sendMessage(id, `Hi, ${msg.from.first_name}! 
The SeniorDevBot will help you with common work-related questions.
To see the list of commands, use /help command`);
});

bot.onText(/\/help/, (msg, match) => {
    const id = msg.chat.id;
    bot.sendMessage(id, `For now, you can use next commands:
    /start
    /help
    /vacation`);
});

bot.onText(/\/vacation/, (msg, match) => {
    const id = msg.chat.id;
    bot.sendMessage(id, `${VACATION_TEXT}`);
});