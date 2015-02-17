var _ = require('underscore'),
    Backbone = require('backbone'),
    Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
    template: "components/stats/bigstats.html",
    events: {
        "click #alert-command": "makeAlert"
    },
    initialize: function(options) {
        

    }
});