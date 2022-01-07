let handler = async m => m.reply(`
GitHub No encontrado
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler