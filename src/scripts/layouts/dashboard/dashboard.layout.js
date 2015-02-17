var _ = require('underscore'),
    Backbone = require('backbone'),
	Marionette = require('backbone.marionette'),
    BigStats  =  require('../../components/stats/bigstats.view.js');


module.exports = Backbone.Marionette.LayoutView.extend({
    template: "layouts/dashboard/dashboard.html",
    regions: {
    	topstats  : ".topstats",
        main: '.main'
    },
    className : "dashboard-layout",
    onRender: function() {  
      this.getRegion('topstats').show(new BigStats());
    }
});