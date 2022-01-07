let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*No etiquetes a mi creador, cualquier cosa que necesites contactalo al privado.*
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@994408103470/i
handler.command = new RegExp

module.exports = handler