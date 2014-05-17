define(function(require, exports, module) {
    "use strict";

    // External dependencies.
    var $ = require("jquery"),
        Backbone = require("backbone"),
        Marionette = require("marionette"),
        Navigation = require("collections/Navigation");
//        MenuView = require("views/MenuView"),
//        FooterView = require("views/FooterView");

    var app = new Marionette.Application();

    app.isMobile = function() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        return ((/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(userAgent));
    };

    app.pages = new Navigation([
        {title: 'Home', name: 'home', active: true},
        {title: 'About', name: 'about'},
        {title: 'Contact', name: 'contact'}
    ]);

//    var menu = new MenuView({collection: app.pages});

    app.addRegions({
        header:     '#header',
        main:       '#main',
        footer:     '#footer',
        welcome:    '#welcome'
    });
//
//    app.addInitializer(function () {
//        app.menu.show(menu);
//        app.footer.show(new Footer());
//    });

    app.on("initialize:after", function(options){
        if (Backbone.history){
            Backbone.history.start();
        }
    });

    app.vent.on('menu:activate', function (activePageModel) {
//        menu.collection.findWhere({active: true})
//            .set('active', false);
//
//        activePageModel.set('active', true);
//        menu.render();
    });

    // The root path to run the application through.
    app.root = "/";

    module.exports = app;
});
