const depC = require('depC');

module.exports = () => {
  console.log('called from depB...');
  depC();
}
