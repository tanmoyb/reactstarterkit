

import FluxCartActions from './Actions/FluxCartActions';

module.exports = {

  // load the mock data from the localStorage into ṔroductStore via Actions

getProductData: function() {

  var data = JSON.parse(localStorage.getItem('product'));
  FluxCartActions.recieveProduct(data);
}
};
