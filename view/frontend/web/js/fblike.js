define([
    'jquery',
    'facebook'
], function ($) {
    'use strict';

    $.widget('swissup.fblike', {

        options: {
            appId: ''
        },

        /**
         * [_init description]
         */
        _init: function () {
            FB.init({
                appId: this.options.appId,
                xfbml: true,
                version: 'v2.10'
            });
            this.addObservers();
        },

        /**
         * Add click observer for custom like button
         */
        addObservers: function () {
            $('.fbl-custom .like').each(function () {
                if ($(this).hasClass('initialized')) {
                    return;
                }
                $(this).click(function () {
                    // variable 'this' - element with the observer
                    // call fb dialog to like product
                    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
                    FB.ui(
                        {
                            method: 'share_open_graph',
                            action_type: 'og.likes',
                            action_properties: JSON.stringify({
                                object: $(this).data('url')
                            })
                        },
                        function (response) {}
                    );
                    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
                });
                $(this).addClass('initialized');
            });
        }
    });

    return $.swissup.fblike;
});
