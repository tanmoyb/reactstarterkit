

import AppDispatcher from '../Dispatcher/AppDispatcher';
import FluxCartConstants  from '../Constants/FluxCartConstants';


// define the action object

var FluxCartActions = {

// Recive the initial prduct data

recieveProduct: function(data) {

AppDispatcher.handleAction({
actionType: FluxCartConstants.RECEIVE_DATA,
data:data

})


},

// set the currently seleceted product variation

selectProduct: function(index) {
 AppDispatcher.handleAction({
   actionType:FluxCartConstants.SELECT_PRODUCT,
   data: index
 })


},

// Add item to the CartAPI
addtoCart: function(sku, update) {

  AppDispatcher.handleAction({
    actionType:FluxCartConstants.CART_ADD,
    data:sku,
    update: update
  })

},

// Remove item form the CART_ADD

removeFromCart: function(sku) {

AppDispatcher.handleAction({

  actionType:FluxCartConstants.CART_REMOVE,
  sku:sku
})

},

// update cart visibility status

updateCartVisible:function(cartVisible) {

  AppDispatcher.handleAction({
     actionType:FluxCartActions.CART_VISIBLE,
     cartVisible:cartVisible

  })


}



};


module.exports = FluxCartActions;
