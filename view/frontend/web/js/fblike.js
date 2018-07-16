define([
    'jquery',
    './fbinit',
    'jquery/ui'
], function ($, FB) {
    'use strict';

    $.widget('swissup.fblike', {
        /**
         * [_create description]
         */
        _create: function () {
            FB.swissupReady($.proxy(this.fbInit, this));
        },

        /**
         * Bind events
         */
        _bind: function () {
            if (!this.element.hasClass('fbl-ready')) {
                this.element.addClass('fbl-ready');
                this._on($('.like', this.element), {
                    /**
                     * click listener
                     */
                    click: function () {
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
                            function (response) {} // eslint-disable-line no-unused-vars
                        );
                        // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
                    }
                });
            }
        },

        /**
         * Initialize facebook button
         */
        fbInit: function () {
            FB.XFBML.parse(this.element.get(0));
            this._bind();
        }
    });

    return $.swissup.fblike;
});
