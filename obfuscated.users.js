// ==UserScript==
// @name     loader
// @namespace   Low
// @version  2.5
// @updateURL https://raw.githubusercontent.com/CryingHaru/The-secretcave/main/obfuscated.users.js
// @downloadURL https://raw.githubusercontent.com/CryingHaru/The-secretcave/main/obfuscated.users.js
// @require https://raw.githubusercontent.com/CryingHaru/The-secretcave/main/loaded.users.js
// @description autofiller
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.5/xlsx.full.min.js
// @resource   IMPORTED_CSS https://raw.githubusercontent.com/CryingHaru/The-secretcave/main/styles.css
// @grant      GM_getResourceText
// @grant      GM_addStyle
// @author ASV
// @match https://simmow.salud.gob.sv/conrec.php*
// @grant unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
const my_css = GM_getResourceText("IMPORTED_CSS");
GM_addStyle(my_css);
