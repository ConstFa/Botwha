let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (!text) return m.reply('*Que texto quiere que busque..?*')
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('404 Not Found')
  conn.sendFile(m.chat, url, 'error', `
*── 「 GOOGLE IMAGEN 」 ──*
ㅤ*── 「 Aqui tienes 」 ──* 
`.trim(), m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
