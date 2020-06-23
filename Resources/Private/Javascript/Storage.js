window.closeCookieDialogue = function() {};

(function() {
    var dialog = document.querySelector('.cookie-dialogue');
    var visible = true;

    if (dialog) {
        var storage = {
            name: 'cookieDialogue',
            value: 'closed'
        };
        var query = {
            visible: 'cookie-dialogue--visible',
            button: 'button'
        };

        function remove() {
            visible = false;
            dialog.parentElement.removeChild(dialog);
        }

        function setItem() {
            localStorage.setItem(storage.name, storage.value);
        }

        function close() {
            visible = false;
            dialog.classList.remove(query.visible);
            setTimeout(remove, 500);
            setItem();
        }

        function checkItem() {
            if (localStorage.getItem(storage.name) == storage.value) {
                remove();
            } else {
                setTimeout(function() {
                    var buttons = dialog.querySelectorAll(query.button);
                    for (var i = 0; i < buttons.length; i++) {
                        buttons[i].addEventListener('click', close);
                    }
                    dialog.classList.add(query.visible);
                }, 500);
            }
        }

        checkItem();

        window.closeCookieDialogue = function(transition) {
            if (!visible) {
                return;
            }
            if (transition) {
                close();
                return;
            }
            remove();
            setItem();
        };
    }
})();
