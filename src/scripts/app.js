var _ = require('underscore'),
    Backbone = require('backbone');
    Backbone.$ = require("jQuery");
    Marionette = require('backbone.marionette'),
    //Controller = require('./controller'),
    Router = require('./router');
    //ContactModel = require('./models/contact'),
    //ContactsCollection = require('./collections/contacts');
    
var App = new Backbone.Marionette.Application();

//Organize Application into regions corresponding to DOM elements
//Regions can contain views, Layouts, or subregions nested as necessary
App.addRegions({
    headerRegion:"#header",
    sidebarRegion:"#sidebar",
    mainRegion:"#main"
});

App.on('start', function() {
    Backbone.history.start();
    console.log("what up");
});

App.start();
module.exports = App;