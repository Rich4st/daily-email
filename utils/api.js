const {
  weather,
  one,
  commemorationDay,
  cuteCate,
  words,
  zhihuDaily
} = require('../api');
const {
  card_one,
  card_weather,
  card_commemoration,
  card_cat,
  card_words,
  card_zhihu
} = require('../card');
const API = {
  天气: { func: weather, format: card_weather },
  纪念日: { func: commemorationDay, format: card_commemoration },
  ONE: { func: one, format: card_one },
  CuteCat: { func: cuteCate, format: card_cat },
  Words: { func: words, format: card_words },
  知乎日报: { func: zhihuDaily, format: card_zhihu }
};

module.exports = API;
