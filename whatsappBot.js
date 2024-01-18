const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('WhatsApp client is ready!');
});

client.initialize();

function sendMessageToWhatsAppGroup(message, groupId) {
  client.sendMessage(groupId, message).then(response => {
    console.log('Message sent to WhatsApp group:', message);
  }).catch(err => {
    console.error('Failed to send message to WhatsApp group:', err);
  });
}

module.exports = { sendMessageToWhatsAppGroup };
