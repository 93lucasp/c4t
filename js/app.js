var _app = function() {

    return {
        init: function() {
            this.checkCookies();
        },
        checkCookies: function() {
            if (document.cookie.match(/cookies=1/gi)) {
                $('.cookies').hide();
            }
        },

        hideCookies: function() {
            document.cookie = 'cookies=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;';
            this.checkCookies();
        },



    }
}();

$(document).ready(function() {
    _app.init();
});