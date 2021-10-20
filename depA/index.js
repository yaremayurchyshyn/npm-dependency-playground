const depB = require('depB');

module.exports = () => {
  console.log('called from depA...');
  depB();
}
