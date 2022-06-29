// ==UserScript==
// @name        Twitter: WHAT’S HAPPENING???
// @name:ru     Twitter: А ЧТО ПРОИСХОДИТ???
// @name:de     Twitter: WAS IST LOS???
// @name:fr     Twitter: QUE SE PASSE-T-IL???
// @namespace   https://github.com/ttldtor
// @compatible  chrome
// @compatible  firefox
// @match       *://*twitter.com/*
// @grant       none
// @version     1.0.0
// @author      ttldtor
// @description kek
// @icon        https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @license     Unlicense
// ==/UserScript==

(function(){
  'use strict';
  
  const translations = new Map();
  
  translations.set('Что происходит?', 'А ЧТО ПРОИСХОДИТ???');
  translations.set('What’s happening?', 'WHAT’S HAPPENING???');
  translations.set('Was gibt\'s Neues?', 'WAS IST LOS???');
  translations.set('Quoi de neuf ?', 'QUE SE PASSE-T-IL???');
  
  function update() {
    Array.from(document.querySelectorAll('div.public-DraftEditorPlaceholder-inner'))
      .forEach(draftEditorPlaceholder => {
        const translation = translations.get(draftEditorPlaceholder.textContent);

        if (translation !== undefined) {
          draftEditorPlaceholder.textContent = translation;
        }
      });
  }
  
  setInterval(update, 500);  
})();
