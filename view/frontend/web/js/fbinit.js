/* global FB */
define([
    (function () {
        'use strict';

        var facebookSdk = '//connect.facebook.net/' +
                document.documentElement.lang.replace('-', '_') +
                '/sdk.js?nomin=1';

        return facebookSdk;
    })()
], function () {
    'use strict';

    var callbacks = [],
        isInitialized = false;

    /**
     * Initialize FB SDK after source is loaded
     */
    window.fbAsyncInit = function () {
        var fbAppId = document.head.querySelector('meta[property="fb:app_id"]');

        FB.init({
            appId: fbAppId ? fbAppId.content : '',
            xfbml: false,
            version: 'v2.10'
        });
        callbacks.forEach(function (callback) {
            callback();
        });
        callbacks = [];
        isInitialized = true;
    };

    /**
     * @param {Function} callback
     */
    FB.swissupReady = function (callback) {
        if (isInitialized) {
            callback();
        } else {
            callbacks.push(callback);
        }
    };

    return FB;
});
