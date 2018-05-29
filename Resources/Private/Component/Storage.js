(function() {
    var dialog = document.querySelector(".cookie-dialogue");

    if (dialog) {
        var storage = {
            name: "cookieDialogue",
            value: "accepted"
        };
        var query = {
            visible: "-visible",
            button: "button"
        };

        function remove() {
            dialog.parentElement.removeChild(dialog);
        }

        function accept() {
            dialog.classList.remove(query.visible);
            setTimeout(remove, 500);
            localStorage.setItem(storage.name, storage.value);
            return false;
        }

        function checkItem() {
            if (localStorage.getItem(storage.name) == storage.value) {
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
