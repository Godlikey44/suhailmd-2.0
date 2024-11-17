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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_20_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjksXG4gICAgICAgIDk2LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDM4LFxuICAgICAgICA0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQzLFxuICAgICAgICA5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyLFxuICAgICAgICA2LFxuICAgICAgICAzNixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MixcbiAgICAgICAgMjE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDg4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDk4LFxuICAgICAgICA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUU1rbWZFVGFwUFdSRy80Slh1UUpoMTVFRWJaVXRUMm5uaGlxZ3lmVHQ1cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUUdIZHhqamdSay0yMmh0Zk8yUWR3UVwiLFxuICBcInBob25lSWRcIjogXCI4YTcwN2M5ZS03ZWRmLTRiZDYtYmU5Mi0yY2RkMWNjM2UwMGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgODQsXG4gICAgICAxMTYsXG4gICAgICAzLFxuICAgICAgMTI2LFxuICAgICAgNzYsXG4gICAgICA4NSxcbiAgICAgIDUxLFxuICAgICAgMTAwLFxuICAgICAgODEsXG4gICAgICAxODIsXG4gICAgICAxODIsXG4gICAgICA3NSxcbiAgICAgIDE5MixcbiAgICAgIDEzOSxcbiAgICAgIDEyLFxuICAgICAgMTY1LFxuICAgICAgMTAzLFxuICAgICAgMTU2LFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgMzYsXG4gICAgICAxMixcbiAgICAgIDgsXG4gICAgICAyMzMsXG4gICAgICAxMzksXG4gICAgICA5NyxcbiAgICAgIDE2NCxcbiAgICAgIDIwMixcbiAgICAgIDcsXG4gICAgICAyMzcsXG4gICAgICAxMjIsXG4gICAgICAxODcsXG4gICAgICA1OCxcbiAgICAgIDE5MCxcbiAgICAgIDEwMyxcbiAgICAgIDg0LFxuICAgICAgMTkxLFxuICAgICAgMjUxLFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNDQxS0dEWkpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDY0OTgxMTM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAwNDE2Mjc3MDc4MDkwOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUExjbHJ3Q0VPbm42TGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYcTBQVzhxOGhMcG95WExhTmVGcTFWeXlVLzZrWHBZYy9ONW9EcXNOVnpFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkl0V3JlM3hBVzlGNURzSlhZb0QxWUY5YWI1Y25ybnlnNk1zWEIyWWc0VDltbW5uU25Hb2IzMDkyajJQUHQ3VW9OeFRQQkZ6VkdMN2lvRUdEWmF1VEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRuMFczTlZmbmk0dFlmbXU1R2ZSSThJL3pqN1QxNTJDN2RQelhMNWlUMzdLUURTL0RIenlNdHB5MTVtVkpVZE5EU3V2MVRyQ3FsMEZ1WFpld0drbmpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDY0OTgxMTM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTg2NzYyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU0zeFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTTN4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiK0pad3BFbGZXaEV1RFlTRFVMTkdaemFndFFqQVZ2YnEyL21JcGlGZnlNWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjMwNzIzNzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTg2NzYzNDU0NlwifSIKfQ=="  // PUT your SESSION_ID 


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
