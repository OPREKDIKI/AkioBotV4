import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    
    let fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6282127487538-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Halo", 
                   "caption": wm, 
                   'jpegThumbnail': fs.readFileSync('./media/ok.jpg')
               }
           }
       }
       let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let scnya = `⟥⟞⟚━┈┈ ❨ Hʏ ${tag} ❩ ┈┈━⟚⟝⟤`
    let footerny = ` 🚨 ╏ sᴄ ᴅɪ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴡᴇʙ
🚀 ┋ ᴡᴇʙ : https://linktr.ee/AkioBot`
 conn.send3ButtonImg(m.chat, `https://telegra.ph/file/6b3590f1f8dffe745c75f.jpg`, scnya, footerny, 'Menu', '.menu', 'Owner', '.owner', 'Website', '.web', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://chat.whatsapp.com/I0viemZ0aRUIpeUhgkVCE8',
    mediaType: 2, 
    description: sgc,
    title: "ᴄʟɪᴄᴋ ᴛᴏ ᴊᴏɪɴ ᴀᴋɪᴏʙᴏᴛ ᴏғᴄ",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = ['sc','sourcode']

export default handler


function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}