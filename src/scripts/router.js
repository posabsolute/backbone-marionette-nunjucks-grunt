var _ = require('underscore'),
    Backbone = require('backbone');
    Backbone.$ = require("jQuery");
    Marionette = require('backbone.marionette');
    
var MyRouter = Backbone.Marionette.AppRouter.extend({
  // "someMethod" must exist at controller.someMethod
  appRoutes: {
    "some/route": "someMethod"
  },

  /* standard routes can be mixed with appRoutes/Controllers above */
  routes : {
    "some/otherRoute" : "someOtherMethod"
  },
  someOtherMethod : function(){
    // do something here.
  }

});


module.exports = MyRouter;