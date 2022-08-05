const request = require('../utils/request');
const iconv = require('iconv-lite');

const Words = async () => {
  const url = "https://random-words-api.vercel.app/word";
  const words = await request(url);
  if(!words) {
    return Promise.reject({
      url: url,
      title: 'WORDS-请求错误',
      date: new Date()
    });
  }
  return Promise.resolve(iconv.decode(words, 'utf8'));
}

module.exports = Words;
