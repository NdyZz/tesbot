const chalk = require('chalk')
const fs = require('fs')
global.ppbot = `https://telegra.ph/file/7459f361ae5c6d08087a3.jpg`// pakai url gmbr
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})