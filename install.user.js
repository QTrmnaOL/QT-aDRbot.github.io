// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://adarkroom.doublespeakgames.com/
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoADR-Script';
script.src = 'https://raw.githubusercontent.com/QTrmnaOL/QTrmnaOL.github.io/master/aDarkRoom/AutoADR.js';
document.head.appendChild(script);