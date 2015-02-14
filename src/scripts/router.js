var _ = require('underscore'),
    Backbone = require('backbone');
    Marionette = require('backbone.marionette');
    
var BaseRouter = Backbone.Marionette.AppRouter.extend({
  /* standard routes can be mixed with appRoutes/Controllers above */
  routes : {
    "/" : "home"
  },
  home : function(){
    console.log("criss");
  }

});


module.exports = BaseRouter;