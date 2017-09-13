define([
    'jquery'
], function ($) {
    'use strict';

    $.widget('swissup.fblike', {

        options: {
            appId: '',
            locale: 'en_US'
        },

        /**
         * widget constructor
         */
        _create: function () {
            this._loadSDK(this.initializeButtons.bind(this));
        },

        /**
         * [_loadSDK description]
         * @param  {Function} fbAsyncCallback
         */
        _loadSDK: function (fbAsyncCallback) {
            var script;

            if (typeof FB == 'undefined') {
                script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = '//connect.facebook.net/' + this.options.locale + '/sdk.js';
                script.id = 'facebook-jssdk';

                if (fbAsyncCallback) {
                    window.fbAsyncInit = fbAsyncCallback;
                }
                $('script[type="text/javascript"]').first().before(script);
            } else {
                fbAsyncCallback();
            }
        },

        /**
         * [initializeButtons description]
         */
        initializeButtons: function () {
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
