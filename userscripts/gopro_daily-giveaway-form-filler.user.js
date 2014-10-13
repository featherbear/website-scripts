// ==UserScript==
// @name        GoPro Daily Giveaway Automatic Entry (Except for captcha)
// @namespace   http://gopro.com/daily-giveaway
// @description GoPro Daily Giveaway Automatic Entry (Except for captcha)
// @include     http://gopro.com/daily-giveaway
// @grant       none
// ==/UserScript==
document.getElementById("contest_entry_first_name").value="Andrew";
document.getElementById("contest_entry_last_name").value="Wong";
document.getElementById("contest_entry_email").value="andrew.j.wong@outlook.com";
document.getElementById("contest_entry_twitter_handle").value="@_andrewjwong";
document.getElementById("contest_entry_location").value="Sydney, NSW, Australia";
document.getElementById("contest_entry_news_optin").click();
document.getElementById('recaptcha_response_field').focus();