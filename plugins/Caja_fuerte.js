let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Caja.jpg'
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
*<AGREGAR A LA LISTA/>*

° _${usedPrefix}agregarmsg *texto/comando/palabra clave* (responde a un texto)_
° _${usedPrefix}agregarvn *texto/comando/palabra clave* (responde a una nota de voz)_
° _${usedPrefix}agregarvideo *texto/comando/palabra clave* (responde a un video)_
° _${usedPrefix}agregaraudio *texto/comando/palabra clave* (responde a un audio)_
° _${usedPrefix}agregarimg *texto/comando/palabra clave* (responde a una imagen)_
° _${usedPrefix}agregarsticker *texto/comando/palabra clave* (responde a un sticker)_

*<LISTAS DE COMANDOS/>*

° _${usedPrefix}listamsg_
° _${usedPrefix}listavn_
° ️_${usedPrefix}listavideo_
° ️_${usedPrefix}listaaudio_
° _${usedPrefix}listaimg_
° ️_${usedPrefix}listasticker_

*<VER TEXTOS O ARCHIVOS/>*

° _${usedPrefix}vermsg *texto/comando/palabra clave*_
° _${usedPrefix}vervn *texto/comando/palabra clave*_
° _${usedPrefix}vervideo *texto/comando/palabra clave*_
° _${usedPrefix}veraudio *texto/comando/palabra clave*_
° _${usedPrefix}verimg *texto/comando/palabra clave*_
° _${usedPrefix}versticker *texto/comando/palabra clave*_

*<ELIMINAR/>*

° ️ _${usedPrefix}eliminarmsg *texto/comando/palabra clave*_
°  _${usedPrefix}eliminarvn *texto/comando/palabra clave*_
° _${usedPrefix}eliminarvideo *texto/comando/palabra clave*_
° _${usedPrefix}eliminaraudio *texto/comando/palabra clave*_
°  _${usedPrefix}eliminarimg *texto/comando/palabra clave*_
° _${usedPrefix}eliminarsticker *texto/comando/palabra clave*_
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menusimple']
handler.tags = ['General']
handler.command = /^(CajaFuerte)$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler