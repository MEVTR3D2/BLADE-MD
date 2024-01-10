const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '237620845735'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'maxdavid126@gmail.com'
global.github = 'https://github.com/Bladeh4x/BLADE-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "2348059540212"
global.devs = '2348059540212'
global.website = 'https://github.com/Bladeh4x/BLADE-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0kvdzJaN1FiTEZzYmtsM3BsOTM5dUE1ekxOQnlPL0JoMGxEMngvVlJHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzkvK3Y1czZGQzc5aGZlMjdBODhQbkt2a3h5WU9kQ0I1ek81ZzB3MFJFbz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTE9kWTBnNlFwd0tKVlpqRGhEajBYUDRyRzlqUUNnU3RtTzRCQlpJTldNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZWWp2dHFCcjgvMTJLZS9HKytrc3NWTGcwSXR0MEt2RVp0aGJMWnE0VWprPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklGQ0FNT05ZZUZtZEdwWGxYNDErVmVuZFVmZ1ZrRTJVSEUvOUJUNlhpMnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp1dUVNS0V3aGdZZWs2R2E3QXdEcU01aUpxSndGZkZWS2NWUUZSMHdiakk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLdCt6T3IyWlVxVEhFT0xsaXIzL2ZUVGhjRzdMQlFJRUxLb0RIWnBEV3huSUttb3NXN3VpT3l2akN5K0lmaXY3STdRbFVvalpmZTUyb2s5RHQwL0lpdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIwMSwiYWR2U2VjcmV0S2V5Ijoic0hLS21KVVlKekNWY1BuQzVxOWZYWGVwbSsvbGJNVGlrbWU4OHBCbTU2Yz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoid3dFU2tYTUhTLS1zUE1BNVR1T1lXdyIsInBob25lSWQiOiJkYjE3NzI0Ny05M2YzLTQ3NGItOTY0OS00NWVkMTRiZTliODQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUgzVDRtQXhYY3NWdFRHN0hzT1pNNFlrc01NPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2bGV6SHo0aHlHMmVGMFlqM2NiblZEMGE4VzA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQUFg5Sk1IRUxpMi9Ld0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im40UklPdi9pUDZBOFBKd1l5YnIrQWM1UTZkdEM3N2JXU0JtcVlNeGVmQU09IiwiYWNjb3VudFNpZ25hdHVyZSI6InZTalNUbGF2TFF1L244MXozanZnaVczOG05dnJkV1hqYi9EOWpmNjJhaTJFdnIwaFVxTGZla3dPSU5JTlRKUFpsaEpJYmdJRFhvOGQwOFpuRWtLcERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFVFpncFpWVVhWTVVZSXBHUytRZlBDTTNQdEc5NVl4ajBuOHREQWhJeHh2WFkwTzJ6eVcxcWRPTTZjSFRUS3pqN3B2YkFpOU1ZQmhTRFo3V3dZOXJoUT09In0sIm1lIjp7ImlkIjoiMjM0OTA3Mjc2MjI4ODozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkInwnZCa8J2Qm/CdkJrwnZCm8J2QoiDwnZCY8J2QrvCdkKbwnZCe8J2QpPCdkKgifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA3Mjc2MjI4ODozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlorRVNEci80aitnUER5Y0dNbTYvZ0hPVU9uYlF1KzIxa2dacW1ETVhud0QifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDQ5MjYwMTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSnRLIn0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'MEVTR',
  packname:  process.env.PACK_NAME || 'MADE BY 3D',
  
  botname:   process.env.BOT_NAME === undefined ? "MEVTR" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'MEVTR' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴅᴇ-²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
