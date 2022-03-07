console.log("Alessandro Minissale");

setInterval(() => {
	console.log("ALessandro Minissale");
}, 10000)

let nt = document.getElementById("toggler");
let nb = document.getElementById("navs");
let ld = document.getElementById("loading-box")
let body = document.querySelector("body");
let isnt = false;

function toggleNavbar(e) {

	if (isnt) {
		e.classList.remove("fa-times");
		e.classList.add("fa-bars");
		nb.classList.remove("on")
		body.classList.remove("on")
		isnt = false;
	} else if (!isnt) {
		e.classList.add("fa-times");
		e.classList.remove("fa-bars");
		nb.classList.add("on")
		body.classList.add("on")
		isnt = true;
	}

}

window.onload = () => {
	setTimeout(() => {
		ld.classList.add("off");
		body.classList.remove("on")
	}, 1510);
}

//Cookie
var nibirumail_stop_jquery,cookie_policy_url,nibirumail_advice_text;function _NibirumailGetStyle(i,e){return"undefined"!=typeof getComputedStyle?getComputedStyle(i,null).getPropertyValue(e):i.currentStyle[e]}function _NibirumailFadeOut(i,e){var t,o;i&&(e?(t=1,o=setInterval(function(){(t-=50/e)<=0&&(clearInterval(o),t=0,i.style.display="none",i.style.visibility="hidden"),i.style.opacity=t,i.style.filter="alpha(opacity="+100*t+")"},50)):(i.style.opacity=0,i.style.filter="alpha(opacity=0)",i.style.display="none",i.style.visibility="hidden"))}function _NibirumailAddEventListener(i,e,t){i.addEventListener?i.addEventListener(e,t):i.attachEvent("on"+e,function(){t.call(i)})}function NibirumailgetCookie(i){var e=("; "+document.cookie).split("; "+i+"=");if(2==e.length)return e.pop().split(";").shift()}function NibirumailCookieAccept(){var i=new Date;i.setMonth(i.getMonth()+3);var e=location.hostname.split("."),t=(e.shift(),e.join("."),e.slice(-2).join("."));console.log(t),document.cookie="nibirumail_cookie_advice=1; expires="+i.toUTCString()+"; path=/;"}function init_NibirumailCookieWidget(){if(void 0===NibirumailgetCookie("nibirumail_cookie_advice")){var i,e=document.getElementById("nibirumail_cookie_advice");e||((i=document.createElement("div")).id="nibirumail_cookie_advice",document.body.appendChild(i),e=i),e.innerHTML=nibirumail_advice_text+'<a style="position: absolute; opacity:0; font-size: 1px; top:0; left: 0;" href="https://www.lenus.it">agenzia comunicazione</a>',e.style.zIndex=2147483647,e.style.position="fixed",e.style.bottom=0,e.style.left=0,e.style.width="100%",e.style.background="#000",e.style.color="#fff",e.style.textAlign="center",e.style.padding="15px 0",e.style.fontSize="12px";for(var t=e.querySelectorAll("a"),o=0;o<t.length;o++)t[o].style.color="#fff",t[o].style.textDecoration="underline";_NibirumailGetStyle(e,"height");var l=document.querySelectorAll(".nibirumail_agreement");for(o=0;o<l.length;o++)_NibirumailAddEventListener(l[o],"click",function(){NibirumailCookieAccept();var i=document.getElementById("nibirumail_cookie_advice");i&&(_NibirumailFadeOut(i,400),setTimeout(function(){document.body.style.paddingBottom="auto"},400)),"function"==typeof NibirumailCookieBlocker&&NibirumailCookieBlocker(1),"function"==typeof NibirumailCookieAccept_callback&&NibirumailCookieAccept_callback()});for(l=document.querySelectorAll(".nibirumail_agrement"),o=0;o<l.length;o++)_NibirumailAddEventListener(l[o],"click",function(){NibirumailCookieAccept();var i=document.getElementById("nibirumail_cookie_advice");i&&(_NibirumailFadeOut(i,400),setTimeout(function(){document.body.style.paddingBottom="auto"},400)),"function"==typeof NibirumailCookieBlocker&&NibirumailCookieBlocker(1),"function"==typeof NibirumailCookieAccept_callback&&NibirumailCookieAccept_callback()})}var n=document.querySelectorAll(".nibirumail_delete_cookie");for(o=0;o<n.length;o++)_NibirumailAddEventListener(n[o],"click",function(){document.cookie="nibirumail_cookie_advice=1; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/",document.location.reload()})}void 0===nibirumail_stop_jquery&&(nibirumail_stop_jquery=0),void 0===cookie_policy_url&&(cookie_policy_url="https://nibirumail.com/cookies/policy/?url="+window.location.hostname),void 0===nibirumail_advice_text&&(nibirumail_advice_text=window.location.hostname+' utilizza i cookies per offrirti un\'esperienza di navigazione migliore. Usando il nostro servizio accetti l\'impiego di cookie in accordo con la nostra cookie policy. <a target="_blank" href="'+cookie_policy_url+'">Scoprine di pi&ugrave;</a>. <a class="nibirumail_agreement" href="javascript:;">Ho capito.</a>'),init_NibirumailCookieWidget();

