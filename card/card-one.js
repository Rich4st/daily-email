const renderCard = require('../utils/renderCard');
const card_one = (data) => {
  const { title, img_src } = data;
  let one = `<div style="padding:5px;text-align:center;">
      <div style="width:70%;margin:0 auto;">
        <img src='${img_src}' height="100%" width="100%" style="border-radius:5px" />
      </div>
      <span style="font-size:12px">${title}</span>
    </div>`;
  // &#10024; -> ✨
  return renderCard('&#10024;', '#eb7350', one);
};
module.exports = card_one;
