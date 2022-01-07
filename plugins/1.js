let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete al  grupo oficial del Bot*
*https://chat.whatsapp.com/G6Luvtt0lQu8ZLxvAnvmtw*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Kriz Edits*', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler