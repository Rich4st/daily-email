const renderCard = require('../utils/renderCard');
const dailyCuteCate = () => {
  let cuteCate = `<div style="margin: 0 auto">
    <img src="https://cataas.com/cat/cute" >
    </div>`;
  // &#128049; -> 🐱
  return renderCard('&#128049;', '#e43d30', cuteCate);
};
module.exports = dailyCuteCate;
