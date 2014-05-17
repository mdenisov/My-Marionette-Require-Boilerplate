define([
    'app',
    'views/Page'
], function (App, PageView) {
    'use strict';

    return {
        showPage: function (pageName) {

            if(pageName === null) {
                pageName = 'home';
            }

            console.log('Router => Showing page: ' + pageName);
            var pageModel = App.pages.findWhere({name: pageName});

            App.vent.trigger('menu:activate', pageModel);
            App.main.show(new PageView({model: pageModel}));

            if(pageName === 'about') {
                console.log('Example of on demand module loading..');
                require(['modules/Example'], function(Example) {
                    Example.start();
                });
            }

        },

        hello: function() {

            console.log('In route /hi');

        }
    };
});