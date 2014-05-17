define(function (require) {
    'use strict';

    return {
        pages : {
            home: require('hbs!templates/pages/home'),
//            about: require('hbs!templates/pages/about.html'),
//            contact: require('hbs!templates/pages/contact.html')
        },
        page: require('hbs!templates/page'),
//        menuItem: require('hbs!templates/menuItem.html'),
//        footer: require('hbs!templates/footer.html')
    };
});