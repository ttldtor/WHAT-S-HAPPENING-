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
// @version     3.3.0
// @author      ttldtor
// @description This extension changes placeholders on edit fields, as well as the text on some buttons.
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
  buttonsTranslations.set('Ответить', 'ХУЙНУТЬ В ОТВЕТ');
  buttonsTranslations.set('Твитнуть в ответ', 'ХУЙНУТЬ В ОТВЕТ');
  buttonsTranslations.set('Твитнуть все', 'ХУЙНУТЬ ВСЁ');
  buttonsTranslations.set('Добавить еще один твит', 'ХУЙНУТЬ ЕЩЁ');

  function findTranslation(translations, text) {
    return translations.reduce((a, b) => {
      if (a !== undefined) {
        return a;
      }

      return b.get(text);
    }, undefined);
  }

  function applyTranslation(element, translation) {
    if (translation === undefined) {
      return;
    }

    if (element.innerHTML !== undefined) {
      element.innerHTML = translation;
    } else if (element.textContent !== undefined) {
      element.textContent = translation;
    }
  }
  
  function update() {
    Array.from(document.querySelectorAll('div.public-DraftEditorPlaceholder-inner'))
      .forEach(draftEditorPlaceholder => {
        applyTranslation(draftEditorPlaceholder, findTranslation([translations, buttonsTranslations], draftEditorPlaceholder.textContent));
      });
    
    Array.from(document.querySelectorAll('div[role="button"] span, a[role="link"] span, a[role="presentation"] span'))
      .forEach(buttonTextSpan => {
        applyTranslation(buttonTextSpan, findTranslation([buttonsTranslations], buttonTextSpan.innerHTML));
      });
  }
  
  setInterval(update, 500);  
})();
