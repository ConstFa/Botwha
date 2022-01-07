let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.DATABASE._data.users[m.sender]
   //let __timers = (new Date - user.lastclaim)
 //   let _timers = (86400000 - __timers)
  //  let timers = clockString(_timers) 
//    if (new Date - user.lastclaim > 86400000) {
    //    conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan 1000 💵money dan 1 potion`, m)
 //       global.DATABASE._data.users[m.sender].money += 1000
//      global.DATABASE._data.users[m.sender].potion += 1
//        global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
     
        let buttons = button(`*✳️ Estado del Bot ✳️*\n\n*Bot activo 💠*\n*Bot uso público 💠*`, user)
        conn.sendMessage(m.chat, buttons, MessageType.buttonsMessage, { quoted: m })
    }
handler.help = ['estado'] 
handler.command = /^(estado|status|stado|stats)$/i

handler.fail = null

module.exports = handler

//function pickRandom(list) {
 // return list[Math.floor(list.length * Math.random())]
//}
//function clockString(ms) {
//  let h = Math.floor(ms / 3600000)
//  let m = Math.floor(ms / 60000) % 60
//  let s = Math.floor(ms / 1000) % 60
//  console.log({ms,h,m,s})
 // return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
//}

function button(teks, user) {
    const buttons = []
    
    let weekly = new Date - user.lastmonthly > 2592000000
    let monthly = new Date - user.lastmonthly > 2592000000
    let menu = new Date - user.menu
    console.log({weekly, menu, menu})
    
    if (weekly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '#menu'}, type: 1})
    if (monthly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '#menusimple'}, type: 1})
    if (buttons.length == 0) throw teks
    
    const buttonMessage = {
        contentText: teks,
        footerText: '©Bot Tiburon - V2',
        buttons: buttons,
        headerType: 1
    }
    
    return buttonMessage
}