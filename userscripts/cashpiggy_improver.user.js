// ==UserScript==
// @name        CashPiggy Improver
// @namespace   http://cashpig.gy/
// @include     http://cashpig.gy/*/view/*
// @version     1.1a
// @grant       none
// ==/UserScript==
document.hasFocus = function(){return true}; // Allows countdown to run in background
window.frames[0].stop(); // Stop ad iframe loading
