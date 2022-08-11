const renderCard = require('../utils/renderCard');


const dailyWeiBo = (data) => {
  let weiBo = "";
  data.map((v, index) => {
    weiBo += `<div style="display: flex;justify-content: start;align-items:center;margin:7px 0;font-size:11px">
            <b style="display:block;color: #fff;background: #d52c2b;width: 20px;height: 20px;text-align: center;line-height:20px;border-radius: 50%;">${index + 1
      }</b>&ensp;
            <span style="color:#262626;text-decoration:none;font-size:14px;width:90%">${v}</span>
        </div>`;
  })
  return renderCard('&#128240;', '#0084ff', weiBo);
}

module.exports = dailyWeiBo;
