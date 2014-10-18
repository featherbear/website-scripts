// ==UserScript==
// @name        TF2 Outpost Free Member Enhancer
// @author      bearbear12345
// @description Creates a more pleasant experience for non-premium TF2Outpost members
// @namespace   tf2outpost f2p_enhancer
// @include     http://www.tf2outpost.com*
// @version     1.0
// @grant       none
// ==/UserScript==

// Remove ads
Ads.removeAll();

// Functions below only apply to the user's trades
if (document.getElementsByClassName('state_toggle').length > 0) {
  // Confirm user wants to close trade
  /* When a premium user ends his or her subscription, all of their trades will stay.
   * However, they will be unable to add new trades.
   * If they close a trade, they cannot reopen it unless the number of open trades is less than 5.
   */
  for (i = 0; i < document.getElementsByClassName('state_toggle').length; i++) {
    document.getElementsByClassName('state_toggle')[i].onclick = function(e) {
      if (this.attributes["data-tipsy"].value == "Close Trade") {
        if (tradeno_max.length != 0) {
          if (prompt("You have used " + tradeno_max[0] + " out of " + tradeno_max[1] + " trade slots.\n\nAre you sure you want do this?\n" + (parseInt(tradeno_max[0])>parseInt(tradeno_max[1]) ? "You will not be able to reopen this trade.\n":"") + "To continue, type \"yes\"") != "yes") {
            e.stopPropagation();
          }
        } else {
          alert("The page is still loading. Try again.");
          e.stopPropagation();
        }
      }
    }
  }
  // Get number of trades & maximum number of trades
  function loadPath(url, callback) {
    result = document.createElement("iframe");
    result.src = url;
    result.style.height = 0;
    result.style.width = 0;
    result.style.display = "none";
    result.onload = function() {
      callback();
    }
    document.head.appendChild(result); // Attach the iframe element to the document head. (iframe will only load when it is attached)
  }
  function get_tradeno_max() {
    tradeno_max = result.contentWindow.document.getElementById('modules').getElementsByClassName('title')[0].getElementsByTagName('strong')[0].innerHTML.split('/');
    document.head.removeChild(result);
  }
  tradeno_max = [];
  loadPath("http://www.tf2outpost.com/new", get_tradeno_max);
}