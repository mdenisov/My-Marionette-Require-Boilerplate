define([
    'app',
    'marionette',
    'routers/gallery',
    'controllers/gallery'
], function(App, Marionette, Router, Controller) {

    console.log('Module:Gallery => Loading...');

    var PagesModule = App.module("Gallery", function(Gallery) {

        this.startWithParent = false;

        this.addInitializer(function(){
            console.log('Module:Gallery => initialized');

            this.router = new Router({ controller: Controller });
        });

    });

//    PagesModule.addFinalizer(function(){
//        app.someRegion.close();
//    });

    return PagesModule;
});