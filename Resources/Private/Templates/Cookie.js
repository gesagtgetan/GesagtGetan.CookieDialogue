(function(){function e(){r.parentElement.removeChild(r)}function t(){try{var e=new Date,t="expires=";e.setTime(e.getTime()+c.timeToExpire),document.cookie=c.name+"="+c.value+";"+t+e.toUTCString()+";path=/"}catch(i){}}function i(){try{for(var e=c.name+"=",t=decodeURIComponent(document.cookie),i=t.split(";"),o=0;i.length>o;o++){for(var n=i[o];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return!1}catch(r){return!1}}function o(){r.classList.remove(u.visible),setTimeout(e,500),t()}function n(){i()==c.value?e():setTimeout(function(){for(var e=r.querySelectorAll(u.button),t=0;e.length>t;t++)e[t].addEventListener("click",o);r.classList.add(u.visible)},500)}var r=document.querySelector(".cookie-dialogue");if(r){var c={name:"cookieDialogue",value:"closed",timeToExpire:31536e7},u={visible:"cookie-dialogue--visible",button:"button"};n()}})();