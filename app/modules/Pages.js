define([
    'app',
    'marionette',
    'routers/index',
    'controllers/index'
], function(App, Marionette, Router, Controller) {

    console.log('Module:Pages => Loading...');

    var PagesModule = App.module("Pages", function(Pages) {

        this.startWithParent = false;

        this.addInitializer(function(){
            console.log('Module:Pages => initialized');

            this.router = new Router({ controller: Controller });
        });

    });

//    PagesModule.addFinalizer(function(){
//        app.someRegion.close();
//    });

    return PagesModule;
});