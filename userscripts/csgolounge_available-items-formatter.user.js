// ==UserScript==
// @name        CSGO Lounge Available Items formatter
// @description Formats the CSGO Lounge available weapons page to a user-friendly format
// @author      bearbear12345
// @namespace   http://csgolounge.com/availableweapons
// @include     http://csgolounge.com/availableweapons
// @version     1.1
// @grant       none
// ==/UserScript==
document.title="Available items in CSGO Lounge";
var iStyle = document.createElement('style');  
document.getElementsByTagName('body')[0].appendChild(iStyle);
var style = document.styleSheets[0];
style.insertRule(".hover_bold:hover {font-weight: bold;}",document.styleSheets[0].cssRules.length);
document.body.innerHTML=document.body.innerHTML.replace(/\t\t/g,'</br>').replace(/StatTrakâ„¢/g,'StatTrak™').replace(/&lt;marketname&gt;/g,'<span class="hover_bold">').replace(/&lt;\/marketname&gt;&lt;price&gt;/g,'\t-\t$').replace(/&lt;\/price&gt;/g,'').replace(/<\/br>/g,"</span></br>");
