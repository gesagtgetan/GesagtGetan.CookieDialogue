(function() {
	var daysToExpire = 3650;
	var cookieName = 'cookiesAllowed'
	var dialogSelector = '.cookie-dialogue';
	var dialog = document.querySelector(dialogSelector);
	var CookieDialogue = {
		// check for cookie
		checkCookie: function () {
			if (CookieDialogue.getCookie() != '1') {
				setTimeout(function () {
					dialog.querySelector('.accept').onclick = CookieDialogue.accept;
					dialog.classList.add('visible');
				}, 500);
			} else {
				CookieDialogue.remove();
			}
		},
		// remove dialog box
		remove: function () {
			dialog.parentElement.removeChild(dialog);
		},

		// accept cookie
		accept: function () {
			dialog.classList.remove('visible');
			setTimeout(CookieDialogue.remove, 500);
			CookieDialogue.setCookie();
			return false;
		},
		// set cookie
		setCookie: function () {
			try {
				var date = new Date();
				var expires = "expires=";
				date.setTime(date.getTime() + (daysToExpire * 86400000)); // 24 * 60 * 60 * 1000 = 86400000
				expires += date.toUTCString();
				document.cookie = cookieName + '=1;' + expires + ';path=/';
			} catch (e) {
			}
		},
		// get cookie
		getCookie: function () {
			try {
				var name = cookieName + '=';
				var decodedCookie = decodeURIComponent(document.cookie);
				var cookieArray = decodedCookie.split(';');
				for (var i = 0; i < cookieArray.length; i++) {
					var c = cookieArray[i];
					while (c.charAt(0) == ' ') {
						c = c.substring(1);
					}
					if (c.indexOf(name) == 0) {
						return c.substring(name.length, c.length);
					}
				}
				return ''
			} catch (error) {
				return ''
			}
		}
	};

	if (dialog) {
		CookieDialogue.checkCookie();
	}
})();
