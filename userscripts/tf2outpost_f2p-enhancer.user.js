// ==UserScript==
// @name        TF2 Outpost Free Member Enhancer
// @namespace   tf2outpost f2p_enhancer
// @include     http://www.tf2outpost.com*
// @grant       none
// ==/UserScript==

// Remove ads
Ads.removeAll();

// Confirm user wants to close trade
/* When a premium user ends his or her subscription, all of their trades will stay.
 * However, they will be unable to add new trades.
 * If they close a trade, they cannot reopen it unless the number of open trades is less than 5.
 */
for (i = 0; i < document.getElementsByClassName('state_toggle').length; i++) {
  document.getElementsByClassName('state_toggle')[i].onclick = function(e) {
    if (this.attributes["data-tipsy"].value == "Close Trade") {
      if (prompt("Are you sure you want do this?\nYou may not be able to reopen this trade (Free member trade limit is 5!)\n\nTo continue, type \"yes\"") != "yes") {
        e.stopPropagation();
      }
    }
  }
}
