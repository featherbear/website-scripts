// ==UserScript==
// @name          TF2 Outpost Auto Bumper
// @author        bearbear12345
// @namespace     tf2outpost.com autobumper
// @include       http://www.tf2outpost.com/trade*
// @version       1.2
// @grant         none
// ==/UserScript==

function Autoclick() {
    if (document.getElementsByClassName("trade_bump").length > 0) document.getElementsByClassName("trade_bump")[0].click();
  }
function startReloadWait() {
  if (location.hash.slice(1) == "auto") {
    (function countdown(remaining) {
      if (remaining <= 0)
        location.reload(true);
      document.title = "TF2 Outpost / Trades - (Autobump) Page reloading in " + Math.floor(remaining / 60) + "m " + (remaining - Math.floor(remaining / 60) * 60) + "s";
      setTimeout(function() {
        countdown(remaining - 1);
      }, 1000);
    })(30 * 60 + 30);
  }
}

if (document.getElementsByClassName("trade_bump").length == 0) startReloadWait();
(document.onload = function Loop() {
  if (document.getElementsByClassName("trade_bump").length == 1) startReloadWait();
  setTimeout(function() {
    Autoclick();
    Loop();
  }, 2000);
}());


