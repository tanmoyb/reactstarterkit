

var Dispatcher = require('flux').Dispatcher;


var AppDispatcher = new Dispatcher();

// convinience method to handle dispath request

AppDispatcher.handleAction = function(action) {


  this.dispath({

    source:'VIEW_ACTION',
    action:action
  });
}

module.exports = AppDispatcher;
