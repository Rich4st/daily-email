const iconv = require('iconv-lite');
const request = require('../utils/request');
const { ApiKey } = require("./ApiKey.json")
const WeiBo = async () => {
  const url = 'http://api.tianapi.com/weibohot/index';
  const one = await request(`${url}?key=${ApiKey}`);
  if (!one) {
    return Promise.reject({
      url: url,
      title: 'ONE-请求错误',
      date: new Date()
    });
  }
  try {
    const html = iconv.decode(one, 'utf8')
    let data = JSON.parse(html).newslist.splice(0, 10)
    let dataList = data.map((item, index) => {
      return item.hotword
    })
    return Promise.resolve(dataList);
  } catch (err) {
    return Promise.reject({
      url: url,
      title: 'ONE-解析错误',
      msg: err,
      date: new Date()
    });
  }
};

module.exports = WeiBo;
