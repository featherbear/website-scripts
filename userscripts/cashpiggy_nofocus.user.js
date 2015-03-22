// ==UserScript==
// @name        CashPiggy No Window Focus
// @namespace   http://cashpig.gy/
// @include     http://cashpig.gy/*/view/*
// @version     1
// @grant       none
// ==/UserScript==
document.hasFocus = function(){return true}
