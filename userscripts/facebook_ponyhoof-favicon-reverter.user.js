// ==UserScript==
// @name        Facebook Favourite Icon Reverter for PonyHoof
// @namespace   facebook.com ponyhoof favicon_reverter
// @include     https://www.facebook.com*
// @grant       none
// ==/UserScript==
(function() {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://fbstatic-a.akamaihd.net/rsrc.php/yl/r/H3nktOa7ZMg.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
}());