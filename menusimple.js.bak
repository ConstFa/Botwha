// NO MODIFIQUES EL NÚMERO DEL CREADOR NI EL NOMBRE, NI LOS GRUPOS POR FAVOR.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS <3 

//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT
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
* Hola ${username} �?*

*_�? Creador :𝗞𝗿𝗶𝘇 𝗘𝗱𝗶𝘁𝘀

*<MENU SIMPLE/>*

° ඬ_${usedPrefix}grupos_
° ඬ⃟_${usedPrefix}estado_ 
° ඬ⃟ _${usedPrefix}bots_
° ඬ⃟ _${usedPrefix}top10gays_
° ඬ⃟_${usedPrefix}toplind@s_
° ඬ⃟_${usedPrefix}topput@s_
° ඬ⃟_${usedPrefix}toppajer@s_
° ඬ⃟ _${usedPrefix}contacto_
° ඬ⃟_${usedPrefix}menu2_
° ඬ⃟_${usedPrefix}bug *texto*_
° ඬ⃟_${usedPrefix}report *texto*_
° ඬ⃟ _${usedPrefix}math *modo*_
° ඬ⃟_${usedPrefix}ttt *nombre del la sala*_
° ඬ⃟_${usedPrefix}delttt *nombre del la sala*_
° ඬ⃟_${usedPrefix}gay2 *yo / @tag*_
° ඬ⃟_${usedPrefix}gay *@tag / nombre*_
° ඬ⃟_${usedPrefix}lesbi *@tag / nombre*_
° ඬ⃟_${usedPrefix}pajero *@tag / nombre*_
° ඬ⃟_${usedPrefix}pajera *@tag / nombre*_
° ඬ⃟_${usedPrefix}puta *@tag / nombre*_
° ඬ⃟ _${usedPrefix}puto *@tag / nombre*_
° ඬ⃟ _${usedPrefix}rata *@tag / nombre*_
° ඬ⃟ _${usedPrefix}manco *@tag / nombre*_
° ඬ⃟_${usedPrefix}manca *@tag / nombre*_
° ඬ⃟_${usedPrefix}prostituta *@tag / nombre*_
° ඬ⃟_${usedPrefix}prostituto *@tag / nombre*_
° ඬ⃟_${usedPrefix}formarpareja_
° ඬ⃟_${usedPrefix}dado_
° ඬ⃟_${usedPrefix}simsimi *texto*_
° ඬ⃟_${usedPrefix}formartrio_
° ඬ⃟_${usedPrefix}disparaalninja_
° ඬ⃟ _${usedPrefix}love *@tag / nombre*_
° ඬ⃟_${usedPrefix}amigorandom_
° ඬ⃟_${usedPrefix}slot *cantidad*_
° ඬ⃟_${usedPrefix}ppt *piedra / papel / tijera*_
° ඬ⃟_${usedPrefix}image *texto*_
° ඬ⃟_${usedPrefix}ytsearch *texto*_
° ඬ⃟_${usedPrefix}ytmp3 *link yt*_
° ඬ⃟_${usedPrefix}ytmp4 *link yt*_
° ඬ⃟_${usedPrefix}play *titulo del audio*_
° ඬ⃟_${usedPrefix}playaudio *titulo del audio*_
° ඬ⃟_${usedPrefix}play2 *titulo del video*_
° ඬ⃟_${usedPrefix}play3 *titulo del audio/video*_
° ඬ⃟_${usedPrefix}letra *nombredelacanción*_
° ඬ⃟_${usedPrefix}google *texto*_
° ඬ⃟_${usedPrefix}googlef *texto*_
° ඬ⃟ _${usedPrefix}pinterestvideo *link de pinterest*_
° ඬ⃟_${usedPrefix}tiktokaudio *link del tiktok*_
° ඬ⃟_${usedPrefix}tiktok *link*_
° ඬ⃟ _${usedPrefix}pinterest2 *texto*_
° ඬ⃟_${usedPrefix}Spotify *Artista, nombre de la canción*_
° ඬ⃟_${usedPrefix}xnxx *link de xnxx*_
° ඬ⃟_${usedPrefix}xnxxsearch *texto*_
° ඬ⃟ _${usedPrefix}acortar *link*_
° ඬ⃟_${usedPrefix}ssweb *link*_
° ඬ⃟_${usedPrefix}animeinfo *nombre del anime*_
° ඬ⃟ _${usedPrefix}save *@tag nombre de contacto*_
° ඬ⃟_${usedPrefix}daradmin *@tag*_
° ඬ⃟ _${usedPrefix}quitaradmin *@tag*_
° ඬ⃟_${usedPrefix}eliminar *@tag*_
° ඬ⃟_${usedPrefix}añadir  *número*_
° ඬ⃟_${usedPrefix}grupo *abierto / cerrado*_
° ඬ⃟_${usedPrefix}enable welcome_
° ඬ⃟_${usedPrefix}disable welcome_
° ඬ⃟_${usedPrefix}enable antilink_
° ඬ⃟_${usedPrefix}disable antilink_
° ඬ⃟_${usedPrefix}enable delete_
° ඬ⃟_${usedPrefix}disable  delete_ 
° ඬ⃟ _${usedPrefix}link_
° ඬ⃟_${usedPrefix}notificar *texto*_
° ඬ⃟_${usedPrefix}setname *Nuevo nombre del grupo*_
° ඬ⃟_${usedPrefix}infogrupo_
° ඬ⃟_${usedPrefix}invocar *texto*_
° ඬ⃟_${usedPrefix}del *responder a un mensaje del bot*_
° ඬ⃟_${usedPrefix}fantasmas_
° ඬ⃟ _${usedPrefix}banchat_
° ඬ⃟_${usedPrefix}unbanchat_
° ඬ⃟_${usedPrefix}stickerfilter_
° ඬ⃟_${usedPrefix}stickermaker_
° ඬ⃟_${usedPrefix}style *texto*_
° ඬ⃟_${usedPrefix}hitler *responde a una imagen*_
° ඬ⃟ _${usedPrefix}blur *responde a una imagen*_
° ඬ⃟_${usedPrefix}s_
° ඬ⃟_${usedPrefix}sticker_
° ඬ⃟_${usedPrefix}semoji_
° ඬ⃟_${usedPrefix}swm *link de imagen de google*_
° ඬ⃟_${usedPrefix}ttp *texto*_
° ඬ⃟_${usedPrefix}attp *texto*_
° ඬ⃟_${usedPrefix}wasted_
° ඬ⃟_${usedPrefix}stonks_
° ඬ⃟_${usedPrefix}trash_
° ඬ⃟_${usedPrefix}rainbow_
° ඬ⃟_${usedPrefix}circle_
° ඬ⃟_${usedPrefix}tomp3 *responde a un video*_
° ඬ⃟_${usedPrefix}toimg *responde a un sticker*_
° ඬ⃟_${usedPrefix}gif *responde a un sticker/video*_
° ඬ⃟ _${usedPrefix}tovideo *responde a una nota de voz*_
° ඬ⃟_${usedPrefix}futbol_
° ඬ⃟_${usedPrefix}Messi_
° ඬ⃟_${usedPrefix}CristianoRonaldo_
° ඬ⃟_${usedPrefix}wpanime_
° ඬ⃟_${usedPrefix}meme_
° ඬ⃟_${usedPrefix}meme2_
° ඬ⃟_${usedPrefix}meme3_
° ඬ⃟_${usedPrefix}cat_
° ඬ⃟_${usedPrefix}dog_
° ඬ⃟_${usedPrefix}pikachu_
° ඬ⃟ _${usedPrefix}waifu_
° ඬ⃟_${usedPrefix}pr *pregunta*_
° ඬ⃟_${usedPrefix}blackpink_
° ඬ⃟_${usedPrefix}reto_
° ඬ⃟ _${usedPrefix}verdad_
° ඬ⃟_${usedPrefix}imagenrandom_
° ඬ⃟_${usedPrefix}neko_
° ඬ⃟_${usedPrefix}iqtest_
° ඬ⃟ _${usedPrefix}kpopitzy_
° ඬ⃟_${usedPrefix}navidad_
° ඬ⃟_${usedPrefix}anime *random / waifu / husbu /neko*_
° ඬ⃟_${usedPrefix}loli_
° ඬ⃟_${usedPrefix}gawrgura_
° ඬ⃟ _${usedPrefix}nyan_
° ඬ⃟_${usedPrefix}naruto_
° ඬ⃟_${usedPrefix}fix_
° ඬ⃟_${usedPrefix}itachi_
° ඬ⃟_${usedPrefix}slap_
° ඬ⃟ _${usedPrefix}pat_
° ඬ⃟_${usedPrefix}subirestado *texto / responder video, imagen o gif*_
° ඬ⃟ _${usedPrefix}labiblia_
° ඬ⃟_${usedPrefix}bass_
° ඬ⃟_${usedPrefix}deep_
° ඬ⃟ _${usedPrefix}earrape_
° ඬ⃟ _${usedPrefix}fast_
° ඬ⃟ _${usedPrefix}fat_
° ඬ⃟_#nightcore_
° ඬ⃟_${usedPrefix}reverse_
° ඬ⃟ _${usedPrefix}robot_
° ඬ⃟_${usedPrefix}slow_
° ඬ⃟ _${usedPrefix}smooth_
° ඬ⃟_${usedPrefix}vibracion *cantidad*_
° ඬ⃟ _${usedPrefix}spamchat *texto*_
° ඬ⃟ _${usedPrefix}spamwa *numero|texto|cantidad*_
° ඬ⃟_${usedPrefix}mention *texto*_
° ඬ⃟_${usedPrefix}profile_
° ඬ⃟ _${usedPrefix}afk *motivo*_
° ඬ⃟ _${usedPrefix}readmore *texto1| texto2*_
° ඬ⃟ _${usedPrefix}qr *texto*_
° ඬ⃟_${usedPrefix}readqr *responde a un código QR*_
° ඬ⃟_${usedPrefix}calc *expresión matemática*_ 
° ඬ⃟_${usedPrefix}zodiac *AAAA MM DD*_
° ඬ⃟_${usedPrefix}scan  *Numero  Ejemplo: 5219996125657*_
° ඬ⃟ _${usedPrefix}kpop_
° ඬ⃟_${usedPrefix}translate es *texto*_
° ඬ⃟_Noche de paz_
° ඬ⃟ _Buenos dias_
° ඬ⃟_Audio hentai_
° ඬ⃟_Fiesta del admin_
° ඬ⃟_Fiesta del admin 2_
° ඬ⃟ _Viernes_
° ඬ⃟_Chica lgante_
° ඬ⃟ _Baneado_
° ඬ⃟_A nadie le importa_
° ඬ⃟_Sexo_
° ඬ⃟_Vete a la vrg_
° ඬ⃟_Hola_
° ඬ⃟_Te amo_
° ඬ⃟_Yamete_
° ඬ⃟_Te diagnostico con gay_
° ඬ⃟_Quien es tu sempai botsito 7w7_
° ඬ⃟ _Bañate_
° ඬ⃟_Vivan los novios_
° ඬ⃟_Marica quien_
° ඬ⃟_Es puto_
° ඬ⃟_Onichan_
° ඬ⃟_Feliz cumpleaños_
° ඬ⃟_Shadow Bot_
° ඬ⃟_Atencion grupo_
° ඬ⃟_Oh me vengo_
° ඬ⃟ _Murio el grupo_
° ඬ⃟ _Siuuu_
° ඬ⃟ _:c_
° ඬ⃟ _a_
° ඬ⃟_${usedPrefix}start_
° ඬ⃟_${usedPrefix}next_
° ඬ⃟_${usedPrefix}leave_
° ඬ⃟_${usedPrefix}jadibot_
° ඬ⃟ _${usedPrefix}stop_
° ඬ⃟ _${usedPrefix}getcode_
° ඬ⃟ _${usedPrefix}galaxia_ 
° ඬ⃟_${usedPrefix}tahta *texto*_
° ඬ⃟ _${usedPrefix}nulis *texto*_
° ඬ⃟_${usedPrefix}nulis2 *texto*_
° ඬ⃟_${usedPrefix}fflogo *texto*_
° ඬ⃟_${usedPrefix}crismeslogo *texto*_
° ඬ⃟_${usedPrefix}phlogo *texto1|texto2*_
° ඬ⃟_${usedPrefix}wolflogo *texto1|texto2*_
° ඬ⃟_${usedPrefix}ytcomment *texto*_
° ඬ⃟_${usedPrefix}botondeyt *nombre del canal*_
° ඬ⃟_${usedPrefix}hornycard_ 
° ඬ⃟_${usedPrefix}lolice *me / @tag*_
° ඬ⃟_${usedPrefix}simpcard *me / @tag*_

*_𝗞𝗿𝗶𝘇 𝗘𝗱𝗶𝘁𝘀_*`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['mebsjjdbshs']
handler.tags = ['General']
handler.command = /^(mebsjjdbshs)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler