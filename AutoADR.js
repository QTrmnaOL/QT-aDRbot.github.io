// ==UserScript==
// @name         QT - AutoTrimpsV2+genBTC
// @namespace    https://github.com/QTrmnaOL/Autotrimps-v2-alpha-QTrmnaOL
// @version      QT - 2.1.5.2-genbtc-12-23-2016+Modular
// @description  try to take over the world!
// @author       zininzinin, spindrjr, belaith, ishakaru, genBTC
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @grant        none
// ==/UserScript==
window.alert("script source loaded");
var ADRVersion = 'QT - 2.1.5.2-genbtc-12-23-2016+Modular';

////////////////////////////////////////////////////////////////////////////////
//Main Loader Initialize Function (loads first, load everything else)///////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////
var atscript = document.getElementById('AutoTrimps-script')
  , base = 'https://raw.githubusercontent.com/QTrmnaOL/Autotrimps-v2-alpha-QTrmnaOL/master/'
  , module = 'modules/'
  ;
if (atscript !== null) {
    base = atscript.getAttribute('src').replace(/AutoTrimps2\.js$/, '');
}
