let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
try {
goblok = `*_Inserte el nombre `
gblk = `de alguna cancio` + `n_*`
google = `*Espere un momento.. estoy realizando la busqueda del audio*`

  if (!text) throw goblok + gblk 
  await m.reply(`*si sale un error significa que no se encontro la cancion o que el nombre de la cancion esta mal escrita*`)

  if (text) {
                            m.reply(google)
  let res = await fetch(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=oCHDwj8ggZGBGjU5WIaK5Rctu6c`)
  let json = await res.json()
  let audio = MessageType.audio
  let data = json.result
      thumb = await (await fetch(data.thumbnail)).buffer()
      name = `ytmp3.jpg`
      header = `*Titulo*: ` + data.title
      content = `*Tama�0�9o:* ` + data.size
      contents = `*Duracion:* ` + data.duration
      source = `*Link YT:* ` + data.source
      dl_link = `*Link de descarga:* ` + data.url_audio
      file = data.url_audio

 conn.sendFile(m.chat, thumb, name, header + `\n` + content + `\n` + contents + `\n` + source + `\n` + dl_link, m)

   await conn.sendFile(m.chat, file, audio, {
  quoted: m
                })
                                                   }
                   } catch (e) {
  throw e
   }
}
handler.command = /^(play(music|audio))$/i
handler.help = ['', 'music','audio'].map(v => 'play' + v + ' <link>')
handler.tags = ['downloader']

handler.prems = false
handler.register = false
handler.fail = null

module.exports = handler