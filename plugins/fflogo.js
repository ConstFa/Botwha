let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw '*🔰 Ingrese un texto*'
  m.reply('*[❗],estoy realizando su logo')
  let res = `https://api.zeks.xyz/api/epep?text=${response}&apikey=MIMINGANZ`
  conn.sendFile(m.chat, res, 'error.jpg', `*Aqui tienes tu logo*`, m, false)
}
handler.help = ['fflogo'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(fflogo)$/i
handler.limit = false
handler.register = false

module.exports = handler

//31caf10e4a64e86c1a92bcba
