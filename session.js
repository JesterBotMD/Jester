//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk1oZFgycDdlelZxL0R3eEEyL3FKUnhSU3J1eW8vODRhazUxTVQ4NEJYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFV0UFNiZER4Y2xSTkFrNzYwWU1UczRqaEhlVGZpYzJkYUl2cmtVZXR3UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRXpmZ1A0VE1QNEhkM0V1dnk4cGV2S1RKM3E1UzVZank3WURVNkNwZEg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3cDNVbTliNWlGL2F4ZHJlMDA1a21VTVllb2VKVzZJMU1NVFZPNmh6d1dJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HbGNnay9xTytvVFhPVzFMbUpxekt4SUNEM2ZRS1R4LzhsNmVDVDkxbXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVRdHdBcFlWY2ROaHQ2YWEzand4SFdIQm1BYm5IcFZWVHRNdk81VGE2eDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0syNWpncmhPQ0hmVVRvUW1KWEJWakd0UFZraVJlV3lJQzJsSGlhY3BFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEZOSVpnZUgxRXA0VEk4cmQ1YmtmTmtSSHdQTlRGakF1dHk4eExXZ0JnTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8yWmhyNG1GcCtrbFBEZmFEcjhXTStoUmdUazFRQVJqZ0wvN3ZnZUZsNHhXN3hjcVA5UGRubzM1cFhnOEdVTS9VRlMrcUtreDdIcFl0N29QRy9wL0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6IjFNVEZ2UHpFQlJRU09GTGRwdUh2R2g4emcwaWxqYm41NWRFZDVmOWlJVk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldpeEtLbmlCVGlTUWJxNVRfZGtpelEiLCJwaG9uZUlkIjoiZWE0NDdlMWYtM2RiYS00OGI0LWJmODItZThiN2FiODI3NzBmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlobWttZ2xGbVlKNlU4aW1kbFBHc0Qrc1ZPcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIya3c0Nk0vQkpObjhoWWR6ald4Mm5YZnJVMzA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN1dTV1c2MVEiLCJtZSI6eyJpZCI6Ijk0NzAxNDIzMDcwOjY2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTY3OTgyMDQzNTQ2MjI6NjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOL2J1bzRFRU5hTjM4SUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwWlpCWHIycWF4bzNoZG9GZ2hDRzVDeXozN2ZhMytTT0lSQy9MN0FkT1RNPSIsImFjY291bnRTaWduYXR1cmUiOiJKTjVPQVE4R3pYTWpvQnROKzFkY2lPZ2s3ZkQwWmNjRm8zWG1uSVBKemIxbjJES0RzdWRWWDRpeXFWYlU3UzZKUzJjNnlCNVBQL2tKd1dQRENnQ2pCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibjdNTDFTTThYSkw1aDVBd1praFFpQXBuSm1jYlFiZFM3UDBBZ3pmL0FsNFBwdHJicUd4MU83dHBYV1N0NkFPRVQ4L08wTWZFNmtuTGxnbzcwd1JnQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMTQyMzA3MDo2NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkR1dRVjY5cW1zYU40WGFCWUlRaHVRc3M5KzMydC9ramlFUXZ5K3dIVGt6In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQU1JRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA1ODMwMTEsImxhc3RQcm9wSGFzaCI6IjNSOVozOSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0701423070",
  PASSWORD: 
    process.env.PASSWORD || "thisadu12#",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
