// ==UserScript==
// @name        Twitter: WHAT’S HAPPENING???
// @name:ru     Twitter: А ЧТО ПРОИСХОДИТ???
// @name:de     Twitter: WAS IST LOS???
// @name:fr     Twitter: QUE SE PASSE-T-IL???
// @namespace   https://github.com/ttldtor
// @compatible  chrome
// @compatible  firefox
// @match       *://*twitter.com/*
// @include     *://*twitter.com/*
// @grant       none
// @version     3.0.0
// @author      ttldtor
// @description kek
// @icon        https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @license     Unlicense
// @homepageURL https://github.com/ttldtor/WHAT-S-HAPPENING-
// @downloadURL https://raw.githubusercontent.com/ttldtor/WHAT-S-HAPPENING-/default/whatshappening.user.js
// @updateURL   https://raw.githubusercontent.com/ttldtor/WHAT-S-HAPPENING-/default/whatshappening.user.js
// ==/UserScript==

(function(){
  'use strict';
  
  const translations = new Map();
  
  translations.set('Что происходит?', 'А ЧТО ПРОИСХОДИТ???');  
  translations.set('What’s happening?', 'WHAT’S HAPPENING???');
  translations.set('Was gibt\'s Neues?', 'WAS IST LOS???');
  translations.set('Quoi de neuf ?', 'QUE SE PASSE-T-IL???');
  
  const buttonsTranslations = new Map();
  
  buttonsTranslations.set('Твитнуть', 'ХУЙНУТЬ');
  
  function update() {
    Array.from(document.querySelectorAll('div.public-DraftEditorPlaceholder-inner'))
      .forEach(draftEditorPlaceholder => {
        const translation = translations.get(draftEditorPlaceholder.textContent);

        if (translation !== undefined) {
          draftEditorPlaceholder.textContent = translation;
        }
      });
    
    Array.from(document.querySelectorAll('div[role="button"] span span'))
      .forEach(buttonTextSpan => {
        const translation = buttonsTranslations.get(buttonTextSpan.innerHTML);

        if (translation !== undefined) {
          buttonTextSpan.innerHTML = translation;
        }
      });
  }
  
  setInterval(update, 500);  
})();
