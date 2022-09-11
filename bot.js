const http = require('http');
const express = require('express');
const client = global.client;

const app = express();
app.get("/", (request, response) => {
  console.log('7/24 AKTİF TUTMA İŞLEMİ BAŞARILI');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("ready", () => {
    console.log("Bot Artık Aktif");
});

client.on("ready", async function() {
const voiceChannel = "811981742147240017"
client.channels.cache.get(voiceChannel).join()
.catch(err => {
throw err;
})
})


client.login(process.env.TOKEN);