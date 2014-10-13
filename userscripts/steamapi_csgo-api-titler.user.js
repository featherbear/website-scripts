// ==UserScript==
// @name        Steam CSGO API Titler
// @namespace   http://api.steampowered.com/IEconItems_730
// @include     http://api.steampowered.com/IEconItems_730*
// @grant       none
// ==/UserScript==
var url = location.href.replace(/.*?:\/\//g, "").substr(36);
if (url.startsWith('GetSchema')) {
  document.title="CSGO Item Schema";
} else if (url.startsWith('GetPlayerItems') && document.body.innerHTML!="<h1>Forbidden</h1>Access is denied. Retrying will not help. Please verify your <pre>key=</pre> parameter." && document.body.innerHTML!="<h1>Bad Request</h1>Please verify that all required parameters are being sent" && document.body.innerHTML!="<pre>{\n\n}</pre>") {
  var args = url.substr(url.indexOf("?")+1).split("&")
  for (i=0;i<args.length;i++) {
    if (args[i].toLowerCase().startsWith('steamid=')) {
      var steamid = args[i].substr(8)
    }
  }
  document.title="CSGO Inventory - " + steamid;
}