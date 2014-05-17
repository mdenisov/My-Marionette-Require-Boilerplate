define([
    'marionette',
    'templates',
    'jquery'
], function (Marionette, templates, $) {
    'use strict';

    return Marionette.ItemView.extend({
        template: templates.page,

        attributes: {
            'data-name': 'home'
        },

        ui: {
            header: 'h2'
        },

        // View Event Handlers
        events: {

        },

        onBeforeRender: function() {
            this.model.set('content', _.result(templates.pages, this.model.get('name')));
        },

        onRender: function() {
//            if(this.model.get('name') == 'home') {
//                this.ui.header.remove();
//            }
        }

    });
});