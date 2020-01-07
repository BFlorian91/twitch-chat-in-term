const tmi = require('tmi.js');

const datas = {
  colors: {
    reset: "\x1b[0m",
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m"
  }
}

function getTime() {
  const date = new Date();
  return `${date.getHours().toString()}:${date.getMinutes().toString()}:${date.getSeconds().toString()}`
}

const client = new tmi.Client({
	connection: {
		secure: true,
		reconnect: true
	},
	channels: [ 'Quin69' ]
})

client.connect()

client.on('message', (channel, tags, message, self) => {
  
  const name = tags['display-name']
  const color1 = datas.colors.cyan
  const color2 = datas.colors.white
  const color3 = datas.colors.red
  const time = getTime()

  console.log(color3, time, color1 ,`#${name}:`, color2, `${message.toLowerCase()} \n`);
})