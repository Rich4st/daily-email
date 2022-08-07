const renderCard = require('../utils/renderCard');
const card_commemoration = ({ data }) => {
  let list = '';
  data.map((v) => {
    const color = v.diff > 7 ? '#a0d911' : v.diff > 3 ? '#faad14' : '#f5222d';
    list += `<div style="color:#333;font-size:14px;display:flex;justify-content: space-between;align-items: center;">
    <span ${v.diff === 0 ? 'class="today"' : ''}>${v.name}</span>
    ${
      v.diff > 0
        ? `<span>还有&ensp;<b style="color:${color};font-size:15px;width: 50px;display: inline-block;">${v.diff}天</b></span>`
        : `<span class="today">今天</span>`
    }
  </div>`;
  });
  const commemoration = `<div style="padding:0px 20px">
  ${
    list ||
    '<div style="color:#333;font-weight:300;display:flex;justify-content: center;align-items: center;">没有临近的纪念日</div>'
  }
  </div>`;
  // &#128467; -> 🗓
  return renderCard('&#128467;', '#ff1744', commemoration, '');
};
module.exports = card_commemoration;
