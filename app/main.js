require(["config"], function() {
    // Kick off the application.
    require([
        "app",
        'modules/Pages',
        'modules/Gallery',
        'jquery'
    ], function (App, PagesModule, GalleryModule, $) {

        'use strict';

        App.addInitializer(function() {
            PagesModule.start();
            GalleryModule.start();
        });

        App.start();

    });
});
