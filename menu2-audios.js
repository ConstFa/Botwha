let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Menu2.jpg'
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
*<MENU  AUDIO*

_Noche de paz_
_Buenos dias_
_Audio hentai_
_Fiesta del admin_
_Fiesta del admin 2_
_Viernes_
_Chica lgante_
_Baneado_
_A nadie le importa_
_Sexo_
_Vete a la vrg_
_Hola_
_Te amo_
_Yamete_
_Te diagnostico con gay_
_Quien es tu sempai botsito 7w7_
_Bañate_
_Vivan los novios_
_Marica quien_
_Es puto_
_Onichan_
_Feliz cumpleaños_
_Atencion grupo_
_Oh me vengo_
_Murio el grupo_
_Siuuu_
_:c_
_shitpost_
_a_
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu2']
handler.tags = ['General']
handler.command = /^(menu2|audios|menú2|memu2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler