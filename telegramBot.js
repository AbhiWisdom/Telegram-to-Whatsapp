const TelegramBot = require('node-telegram-bot-api');
const { sendMessageToWhatsApp } = require('./whatsappBot');

// Replace with your Telegram bot token
const token = '6';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  // Replace with the phone number where you want to send the message
  const whatsappNumber = '910000000'; // Include country code

  if (msg.text) {
    sendMessageToWhatsApp(msg.text, whatsappNumber);
  }
});

module.exports = bot;
