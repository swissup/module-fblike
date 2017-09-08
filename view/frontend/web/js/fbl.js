define([
    "jquery"
], function ($) {
    return {
        init: function(locale, appId) {
            var d = document;
            var s = "script";
            var id = "facebook-jssdk";

            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/"+ locale +"/sdk.js#xfbml=1&version=v2.10&appId=" + appId;
            fjs.parentNode.insertBefore(js, fjs);

            window.fbAsyncInit = this.initObservers();
        },
        initObservers: function() {
            $('.fbl-custom .like').each(function(  ){
                if ($(this).hasClass("initialized")) {
                    return;
                }
                $(this).click(function(){
                    // variable 'this' - element with the observer
                    // call fb dialog to like product
                    FB.ui({
                      method: 'share_open_graph',
                      action_type: 'og.likes',
                      action_properties: JSON.stringify({
                        object: this.getAttribute('data-url'),
                      })
                    }, function(response){});
                });
                $(this).addClass('initialized');
            });
        }
        // ,
        // facebookButtonsInit: function() {
        //     var fbAppId = $('meta[property="fb:app_id"]').first();
        //     FB.init({
        //         appId : fbAppId.getAttribute('content'),
        //         xfbml : true,
        //         version : 'v2.10'
        //     });
        //     initObservers();
        // }
    }
});
