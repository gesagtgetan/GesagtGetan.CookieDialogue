(function() {
    var dialog = document.querySelector(".cookie-dialogue");

    if (dialog) {
        var storage = {
            name: "cookieDialogue",
            value: "closed"
        };
        var query = {
            visible: "-visible",
            button: "button"
        };

        function remove() {
            dialog.parentElement.removeChild(dialog);
        }

        function close() {
            dialog.classList.remove(query.visible);
            setTimeout(remove, 500);
            localStorage.setItem(storage.name, storage.value);
        }

        function checkItem() {
            if (localStorage.getItem(storage.name) == storage.value) {
                remove();
            } else {
                setTimeout(function() {
                    var buttons = dialog.querySelectorAll(query.button);
                    for (var i = 0; i < buttons.length; i++) {
                        buttons[i].addEventListener("click", close);
                    }
                    dialog.classList.add(query.visible);
                }, 500);
            }
        }

        checkItem();
    }
})();
