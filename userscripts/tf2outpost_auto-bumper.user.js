// ==UserScript==
// @name          TF2 Outpost Auto Bumper
// @namespace     tf2outpost.com autobumper
// @include       http://www.tf2outpost.com/trade*
// @grant         none
// ==/UserScript==

function Autobumper() {
  for (var i = 0; i < document.getElementsByClassName("trade_bump").length; i++) {
    document.getElementsByClassName("trade_bump")[0].click();
  }
}
(document.onload = function Loop() {
  var rand = Math.floor((Math.random() * 3000) + 1000);
  setTimeout(function() {
    Autobumper();
    Loop();
  }, rand);
}());