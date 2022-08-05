const renderCard = require('../utils/renderCard');

const card_words = (data) => {
  // object转数组
  const arr = Object.values(JSON.parse(data))
  const word = arr[0].word
  const definition = arr[0].definition
  const pronunciation = arr[0].pronunciation
  let words = `<div style="margin: 0 auto">
      <span style="font-size:12px">单词:${word}</span>
      <br>
      <span style="font-size:12px">释义:${definition}</span>
      <br>
      <span style="font-size:12px">读音:${pronunciation}</span>
    </div>`;
  return renderCard('WORDS', '#259645', words);
};
module.exports = card_words;
