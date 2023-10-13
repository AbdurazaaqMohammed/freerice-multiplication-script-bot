// ==UserScript==
// @name         FreeRice Multiplication Script/Bot
// @namespace    https://github.com/fxolan
// @version      1
// @description  Userscript to automatically play FreeRice multiplication game
// @author       https://github.com/fxolan
// @match        https://play.freerice.com/categories/multiplication-table
// @grant        none
// @homepage     https://github.com/fxolan/freerice-multiplication-script-bot
// @license      The Unlicense
// @supportURL   https://github.com/fxolan/freerice-multiplication-script-bot/issues
// ==/UserScript==

function eval() {

  let text = document.querySelector('.card-title').innerText;

  let numbers = text.split(' x ');

  return numbers[0] * numbers[1];
}

function clickAnswer() {
  let answers = document.querySelectorAll('.card-button');

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].innerText == eval()) {
      answers[i].click();
      break;
    }
  }
}
setInterval(clickAnswer, 1000);
setTimeout(function(){ location.reload(); }, 15000); //When you answer questions too quickly, Freerice starts slowing down the rate at which it gives you new questions. This can simply be reset by refreshing the page every once in a while.
