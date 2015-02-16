var _ = require('underscore'),
    Backbone = require('backbone');
    Backbone.$ = $;
var Marionette = require('backbone.marionette'),
    //Controller = require('./controller'),
    BaseRouter = require('./router'),
    Sidebar = require('./components/sidebar/sidebar.view');
    Headerbar = require('./components/headerbar/headerbar.view');
    //ContactModel = require('./models/contact'),
    //ContactsCollection = require('./collections/contacts');
    
App = new Backbone.Marionette.Application();

/**
 * Replace default renderer with nunjucks
 */
Backbone.Marionette.Renderer.render = function(template, data){
    console.log(data);
    return nunjucks.render(template, data);
};

App.addInitializer(function(options) {
    App.headerRegion.show(new Headerbar({
        title:"Home"
    }));
    App.sidebarRegion.show(new Sidebar());
});

//Organize Application into regions corresponding to DOM elements
//Regions can contain views, Layouts, or subregions nested as necessary
App.addRegions({
    headerRegion:"#header",
    sidebarRegion:"#sidebar",
    mainRegion:"#main"
});

App.on('start', function() {
    baseRoutes = new BaseRouter();
    Backbone.history.start();
});

if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}

App.start();



module.exports = App;