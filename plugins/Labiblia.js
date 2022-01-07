let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './+18.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
*Hola ${username}, aqui tienes el menu +18*

*<MENU +18/>*
- Usar bajo su responsabilidad 

_${usedPrefix}video_
_${usedPrefix}imglesbians_
_${usedPrefix}porno_
_${usedPrefix}randomnsfw_
_${usedPrefix}pornogif_
_${usedPrefix}sideboobs_
_${usedPrefix}hentai_
_${usedPrefix}pene_
_${usedPrefix}ecchi_
_${usedPrefix}pussy_
_${usedPrefix}boobs_
_${usedPrefix}panties_
_${usedPrefix}nekogif_
_${usedPrefix}porno2_
_${usedPrefix}yaoi_
_${usedPrefix}yuri_
_${usedPrefix}yaoigif_
_${usedPrefix}yurigif_
_${usedPrefix}pack_
_${usedPrefix}loli2_
_${usedPrefix}muslos_
_${usedPrefix}htrap_
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['labiblia']
handler.tags = ['General']
handler.command = /^(labiblia)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler