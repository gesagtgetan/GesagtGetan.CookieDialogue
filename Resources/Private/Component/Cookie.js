(function() {
    var dialog = document.querySelector(".cookie-dialogue");

    if (dialog) {
        // We create a cookie with 10 years expire 10 * 365 * 24 * 60 * 60 * 1000 = 315360000000
        var storage = {
            name: "cookieDialogue",
            value: "accepted",
            timeToExpire: 315360000000
        };
        var query = {
            visible: "-visible",
            button: "button"
        };

        function remove() {
            dialog.parentElement.removeChild(dialog);
        }

        function setCookie() {
            try {
                var date = new Date();
                var expires = "expires=";
                date.setTime(date.getTime() + storage.timeToExpire);
                document.cookie =
                    storage.name +
                    "=" +
                    storage.value +
                    ";" +
                    expires +
                    date.toUTCString() +
                    ";path=/";
            } catch (e) {}
        }

        function getCookie() {
            try {
                var name = storage.name + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var cookieArray = decodedCookie.split(";");
                for (var i = 0; i < cookieArray.length; i++) {
                    var c = cookieArray[i];
                    while (c.charAt(0) == " ") {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return false;
            } catch (error) {
                return false;
            }
        }

        function accept() {
            dialog.classList.remove(query.visible);
            setTimeout(remove, 500);
            setCookie();
            return false;
        }

        function checkItem() {
            if (getCookie() == storage.value) {
                remove();
            } else {
                setTimeout(function() {
                    dialog.querySelector(query.button).onclick = accept;
                    dialog.classList.add(query.visible);
                }, 500);
            }
        }
        checkItem();
    }
})();
