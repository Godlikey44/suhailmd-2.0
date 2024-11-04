const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349134909039";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_51_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDUsXG4gICAgICAgIDg1LFxuICAgICAgICA0MCxcbiAgICAgICAgNixcbiAgICAgICAgMTA2LFxuICAgICAgICA3MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDcyLFxuICAgICAgICAzLFxuICAgICAgICAyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgODIsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDMzLFxuICAgICAgICA2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDk0LFxuICAgICAgICA5NyxcbiAgICAgICAgMixcbiAgICAgICAgOTEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTczLFxuICAgICAgICA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYzLFxuICAgICAgICA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDc1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImtxOE1EVzA5a1NjdnZ0WXRrZWY3UFRLWUYrMWYxbUg2UXBxOGEvRk5CZ2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdFc05XZUpXUThhS0JqUy1TNDJaWXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDk2ZDA4ZDEtNzM2NS00ZTE5LTlkM2YtN2I2ZTJmNmQ3ZGMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDc5LFxuICAgICAgMTkyLFxuICAgICAgMjUxLFxuICAgICAgMjQ5LFxuICAgICAgMjIsXG4gICAgICA4NixcbiAgICAgIDE1LFxuICAgICAgMjM2LFxuICAgICAgMTQxLFxuICAgICAgNDYsXG4gICAgICA4OCxcbiAgICAgIDE0NCxcbiAgICAgIDQ4LFxuICAgICAgMTI3LFxuICAgICAgNzcsXG4gICAgICA5MyxcbiAgICAgIDE5MixcbiAgICAgIDE3NCxcbiAgICAgIDE4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MixcbiAgICAgIDE1NixcbiAgICAgIDI4LFxuICAgICAgOTEsXG4gICAgICA5MCxcbiAgICAgIDE1MixcbiAgICAgIDIxNCxcbiAgICAgIDI3LFxuICAgICAgMjA0LFxuICAgICAgMTQ2LFxuICAgICAgMTU1LFxuICAgICAgMTc3LFxuICAgICAgMTg5LFxuICAgICAgMjA4LFxuICAgICAgNyxcbiAgICAgIDEzMixcbiAgICAgIDQxLFxuICAgICAgMjExLFxuICAgICAgMTc5LFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkJXRE5BSldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjA5MTA3NTI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMxNDI2NTUyOTM0NDg3OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWZoaHRvRUVMYUdvN2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyNWtLN0UzRnNtQzk3MXJQY05UUHNLZ01vNHp3emx2Y0dxQmNsbDdzVWt3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRsTTQyWjFQbEoxMzBIQXFSaWFzU082NCtwY2NBVDlHc0p6SkZkc0ZxYWtvbUt4T3NlbnBURnAxR21CbXFqUzBGRHB6b1BYUWQ1bDJvRkJSSytEMERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjEvT3IxWkV4TFZyT1RXMk9NMnRlUm1xUmYyWXV5Q3VTaWJFV0NORllnQkFNTTgvVFFHbzNyeVo1NTJKZSs1K2JSU1VOcHZiRDBsREIzekUySlV0Z2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjA5MTA3NTI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3MjQ2NjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDdFpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN0Wi5qc29uIjogIntcImtleURhdGFcIjpcInVpamlmMDhMeUNDaUZSeWxKSmxsRFVxYUlpS1hTd3E1L0RJYjdadjFIbW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2MjU5NjI5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNzI0NjczNjQ2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "V_Cee",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
