


import AppDispatcher from '../Dispatcher/AppDispatcher';
var EventEmitter = require('events').EventEmitter;
import FluxCartConstants from '../Constants/FluxCartConstants';

import _ from 'underscore';

// define initial data points


var _products = {}, _selected = null;


// Method to load Mock data from the mock APi

function loadProductData(data) {
  _product = data[0];
  _selected = data[0].variants[0];

}

// Method to set currently selectd product variation

function setSelected(index) {

  _selected = _product.variants[index];

}

// Extend productstore with EventEmitter to add eventing capabilities

var ProductStore = _.extend({},EventEmitter.prototype,{

// Return Product data

getProduc.function() {

    return _product;

},

// return selectd Product


getSelected:function () {

  return _selected;
}


// Emit Change event

emitChange:function() {

  this.emit('Change');
},

// remove change listerner

removeChangeListener:function(callback) {

this.removeListener('Change',callback);

}

});

// Register callback with AppDispatcher

AppDispatcher.register(function(payload){

var action = payload.action;
var text;



switch(action.actionType) {

 // Respond to RECEIVE_DATA action

 case FluxCartConstants.RECEIVE_DATA:
 loadProductData(action.data);
 break;

 // Respond to SELECT_PRODUCT action

 case FluxCartConstants.SELECT_PRODUCT:

 setSelected(action.data);

 break;

 default:
 return true;

}


});


module.exports = productstore;
