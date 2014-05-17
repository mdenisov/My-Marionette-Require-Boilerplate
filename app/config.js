// This is the runtime configuration file.  It complements the Gruntfile.js by
// supplementing shared properties.
require.config({
    urlArgs: 'v=' + (new Date()).getTime(),
    paths: {
        "vendor": "../vendor",
        "almond": "../vendor/bower/almond/almond",
        "underscore": "../vendor/bower/lodash/dist/lodash.underscore",
        "jquery": "../vendor/bower/jquery/dist/jquery",
        "backbone": "../vendor/bower/backbone/backbone",
        "marionette":"../vendor/bower/backbone.marionette/lib/core/amd/backbone.marionette",
        "backbone.wreqr":"../vendor/bower/backbone.wreqr/lib/backbone.wreqr",
        "backbone.babysitter":"../vendor/bower/backbone.babysitter/lib/backbone.babysitter",
        "handlebars":"../vendor/bower/handlebars/handlebars",
//        "hbs":"../vendor/bower/hbs/hbs",
//        "i18nprecompile":"../vendor/bower/hbs/hbs/i18nprecompile",
        "hbs":"../vendor/bower/hbs",
        "i18nprecompile":"../vendor/bower/i18nprecompile",
        "json2":"../vendor/bower/json2",

        // Plugins
        "backbone.validateAll":"../vendor/bower/Backbone.validateAll/src/javascripts/Backbone.validateAll",
        "text":"../vendor/bower/requirejs-text/text"
    },
    shim:{
        // Backbone
        "backbone":{
            // Depends on underscore/lodash and jQuery
            "deps":["underscore", "jquery"],
            // Exports the global window.Backbone object
            "exports":"Backbone"
        },
        //Marionette
        "marionette":{
            "deps":["underscore", "backbone", "jquery"],
            "exports":"Marionette"
        },
        //Handlebars
        "handlebars":{
            "exports":"Handlebars"
        },
        // Backbone.validateAll plugin that depends on Backbone
        "backbone.validateAll":["backbone"]
    },
    // hbs config - must duplicate in Gruntfile.js Require build
    locale: 'ru_ru',
    hbs: {
        templateExtension: "html",
        helperDirectory: "templates/helpers/",
        i18nDirectory: "templates/i18n/",

        compileOptions: {}        // options object which is passed to Handlebars compiler
    }
});
