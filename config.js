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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349134909039";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348189862145";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_24_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxLFxuICAgICAgICA1MixcbiAgICAgICAgNjksXG4gICAgICAgIDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI5LFxuICAgICAgICA1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1LFxuICAgICAgICAyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDU3LFxuICAgICAgICAzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNixcbiAgICAgICAgMTc1LFxuICAgICAgICA2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzksXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgOTksXG4gICAgICAgIDUzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMixcbiAgICAgICAgNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MixcbiAgICAgICAgMjE5LFxuICAgICAgICA0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDg2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDcwLFxuICAgICAgICA4MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnU2o1aE1yWU91bGlRUTdSYXhaVUNITmN5YUFoY09JZFV4QysxelZsbGJNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwQzJ3MW5LalIwbVRPTElRR3g0a0pBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM0ZmQ3NTEwLWIxNTItNDM4NC1iMmNiLTI3Yjg2YzdiMmFiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAxNjIsXG4gICAgICAxNDQsXG4gICAgICAxOTYsXG4gICAgICAxNTcsXG4gICAgICA3NSxcbiAgICAgIDY1LFxuICAgICAgMTkyLFxuICAgICAgOTQsXG4gICAgICA4LFxuICAgICAgODYsXG4gICAgICA3MixcbiAgICAgIDEwMixcbiAgICAgIDIxNixcbiAgICAgIDUyLFxuICAgICAgMTcxLFxuICAgICAgOTEsXG4gICAgICAzMCxcbiAgICAgIDEyNCxcbiAgICAgIDE0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDIyNixcbiAgICAgIDIzNyxcbiAgICAgIDcwLFxuICAgICAgMjIwLFxuICAgICAgMzksXG4gICAgICAxOTAsXG4gICAgICAxMTksXG4gICAgICA5MyxcbiAgICAgIDQzLFxuICAgICAgOTQsXG4gICAgICAxOTksXG4gICAgICAyOCxcbiAgICAgIDQ1LFxuICAgICAgMjQwLFxuICAgICAgMTcwLFxuICAgICAgMSxcbiAgICAgIDEyLFxuICAgICAgNjgsXG4gICAgICAxMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSllMUTlUMktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjg1NjMwOTY6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NzY3ODU5MTczMzgzNzoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLbTh4ZndHRUtTMHRia0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm9zc2VZajNRa3FSZFU1S0kyY293aWV0R1pva0d5dHRnSmlTTUtxZVFDbGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ2hKQTl2SE5XM0FPZHowSHRNMWlUdWM3blJacjRwNG5sSUJlbFNBSk8yWjZYUEUrQmxBSDhERXl5bXVxOExtUzdVVXhJRjhGSzlYOFdsR3ZITTl3Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL21aZkZ0TnJkamhwR3U0RGdzZ2p5SS92Vk9JVEdSSmtVSm1VUzR1TjhGbnRQejRDaWNYTXUwTTRzcjJzcm5NdGkvb0s5R2ZoR2NabE9ScVRjckhxaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2ODU2MzA5NjoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTAyNTQ0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxaUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFpRLmpzb24iOiAie1wia2V5RGF0YVwiOlwicDF0dlpmL0N1MnltWW5EVGZ5eGYyZWpQeElPWStOK3BZRDQreXNQWHVHVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODcxNzk3ODAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
