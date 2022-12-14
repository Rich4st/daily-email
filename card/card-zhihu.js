const renderCard = require('../utils/renderCard');
const card_zhihu = (data) => {
  let zhihu = '';
  data.map(
    (v, index) =>
      (zhihu += `<div style="display: flex;justify-content: start;align-items:center;margin:7px 0;font-size:11px">
            <b style="display:block;color: #fff;width: 20px;height: 20px;text-align: center;line-height:20px;border-radius: 50%;">
              <img src="http://182.61.149.102/zhihu-svgicon.svg" >
            </b>&ensp;
            <a style="color:#262626;text-decoration:none;font-size:14px;width:90%" href="${
              v.title_link
            }">${v.title}</a>
        </div>`)
  );
  return renderCard('&#128240;', '#0084ff', zhihu);
};
module.exports = card_zhihu;
