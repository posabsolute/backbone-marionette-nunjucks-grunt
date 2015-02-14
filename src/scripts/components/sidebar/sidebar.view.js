var _ = require('underscore'),
    Backbone = require('backbone'),
    Marionette = require('backbone.marionette');

module.exports = Backbone.Marionette.ItemView.extend({
    template: "components/sidebar/baseSidebar.html",
    events: {
        "click #alert-command": "makeAlert"
    },
    initialize: function(options) {
        

    },
    makeAlert: function(e) {
       
    }
});