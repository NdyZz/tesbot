const chalk = require('chalk')
const fs = require('fs')


// edit thumb ada di file string/ppbot.js

global.owner = ['6285346923840'] // pakai nomor owner
global.ownernomer = "6285346923840" // pakai nomor owner
global.socialmedia = "IG: NdyZzBot" // ini ig buat di ownerjy
global.yutub = "YT: NdyZz"// sama
global.lokasi = "Indonesia, Sulawesi Selatan, Bone"//

global.packgename = "by" 
global.author = "NdyZz" 

global.title = 'NdyZzBot'//Tittle reply 
global.body = 'Subscribe NdyZz' //body reply

global.welcome = false 
global.left = false


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})