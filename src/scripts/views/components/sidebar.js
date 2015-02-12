var SidebarView = Backbone.Marionette.ItemView.extend({
    template: "#app-sidebar-template",
    events: {
        "click #alert-command": "makeAlert"
    },
    initialize: function(options) {
        if(options) {
            if(options.vent) {
                this.vent = options.vent;
            }
        }
    },
    makeAlert: function(e) {
        alert("I'm a sidebar!");
    }
});