// ==UserScript==
// @name         New Userscript
// @namespace    http://rawgit.com/QTrmnaOL/QT-aDRbot.github.io/
// @version      0.1
// @description  try to automate ADR
// @author       You
// @match        http://adarkroom.doublespeakgames.com/
// @grant        none
//@include 		 *http://adarkroom.doublespeakgames.com/*
// ==/UserScript==

var script = document.createElement('script');
var testing = 'X'; // X = Testing on

script.id = 'AutoADR-Script';

if ( testing ==  'X')
	/* Testing Branch */
	script.src = 'https://rawgit.com/QTrmnaOL/QT-aDRbot.github.io/Testing/AutoADR.js';

if ( testing !=  'X')
	/* Live Branch */
	script.src = 'https://rawgit.com/QTrmnaOL/QTrmnaOL.github.io/master/Autotrimps/AutoTrimps2.js';

document.head.appendChild(script);