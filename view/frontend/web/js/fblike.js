define([
    'jquery'
], function ($) {

    'use strict';

    $.widget('swissup.fblike', {

        options: {
            appId: '',
            locale: 'en_US'
        },

        _create: function () {
            this._loadSDK(this.initializeButtons.bind(this));
        },

        _loadSDK: function (fbAsyncCallback) {
            var script;
            if (typeof FB == 'undefined') {
                script = document.createElement( 'script' );
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

        initializeButtons: function () {
            FB.init({
                appId : this.options.appId,
                xfbml : true,
                version : 'v2.10'
            });
            this.addObservers();
        },

        addObservers: function() {
            $('.fbl-custom .like').each(function (){
                if ($(this).hasClass("initialized")) {
                    return;
                }
                $(this).click(function (){
                    // variable 'this' - element with the observer
                    // call fb dialog to like product
                    FB.ui(
                        {
                            method: 'share_open_graph',
                            action_type: 'og.likes',
                            action_properties: JSON.stringify({
                                object: $(this).data('url'),
                            })
                        },
                        function(response){}
                    );
                });
                $(this).addClass('initialized');
            });
        }
    });

    return $.swissup.fblike;
});
