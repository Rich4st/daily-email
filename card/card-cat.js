const renderCard = require('../utils/renderCard');
const dailyCuteCate = () => {
  let cuteCate = `<div style="margin: 0 auto">
    <img src="https://cataas.com/cat/cute" >
    </div>`;
  return renderCard('猫猫', '#e43d30', cuteCate);
};
module.exports = dailyCuteCate;
