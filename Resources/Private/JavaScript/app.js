define(['js-cookie'], function () {

    var Cookies = window.Cookies;
    var CookieDialogue = {
        //check for cookie
        checkCookie: function () {
            if (CookieDialogue.getCookie() !== "1") {
                setTimeout(function () {
                    document.querySelector('.cookieDialogue').classList.add('visible');
                }, 500);
            }
        },
        //cookie accepted
        accept: function () {
            CookieDialogue.setCookie();
        },
        //set cookie
        setCookie: function () {
            Cookies.set("cookiesAllowed", 1, {expires: 3650});
        },
        //get cookie
        getCookie: function () {
            return Cookies.get("cookiesAllowed");
        }
    }

    CookieDialogue.checkCookie();

    document.querySelector('.cookieDialogue .accept').onclick = function () {
        document.querySelector('.cookieDialogue').classList.add('closed');
        setTimeout(function () {
            document.querySelector('.cookieDialogue').remove();
        }, 500);

        CookieDialogue.accept();
        return false;
    };


});