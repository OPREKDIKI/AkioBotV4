let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Pulsa Telkomsel : 6281260730830
⫹⫺ Via Dana : 6281260730830
⫹⫺ Via Qr :
⫹⫺ https://linktr.ee/AkioBot

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
