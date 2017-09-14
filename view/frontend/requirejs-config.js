var config = {
    map: {
        '*': {
            fblike: 'Swissup_Fblike/js/fblike'
        }
    },
    shim: {
        'facebook' : {
            exports: 'FB'
        }
    },
    paths: {
        'facebook': '//connect.facebook.net/' + document.documentElement.lang.replace("-", '_') +'/sdk'
    }
};
