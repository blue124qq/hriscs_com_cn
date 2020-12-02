function add_gdpr() {
	var str = {
		en: {
			gdpr_title: "COOKIE NOTICE",
			gdpr_fixbtm: "We will use Cookies (",
            gdpr_fixbtm_m: "This website uses Cookies (",
			gdpr_a_text: "Information Recording Program",
			gdpr_a_text2:") on your browser to ensure that websites and web applications provide you with the best experience. You can change the cookie settings of your browser at any time. If you continue to use it without changing your browser settings, we will assume that you have agreed to the use of cookies.",
			link: "https://gdpr.sjcorp.com.tw/",
            gdpr_a_text2_m:"). By continuing to use the website, you agree to our Privacy Policy and Cookies.",
			link: "https://gdpr.sjcorp.com.tw/",
			gdpr_agree_text: "I agree"
		},
		tw: {
			gdpr_title: "Cookie使用告知",
			gdpr_fixbtm: "我們將在您的瀏覽器上使用",
            gdpr_fixbtm_m: "本網站使用",
			gdpr_a_text: "Cookie(信息紀錄程序)",
			gdpr_a_text2:"，以確保網站和網絡應用程序為您提供最佳使用體驗，您可以隨時更改瀏覽器的Cookie設置。如果您在未更改瀏覽器設置的情況下繼續使用，我們將認為您已同意接收Cookie的使用。",
            gdpr_a_text2_m:"，如您繼續瀏覽本網站，表示您同意我們的隱私保護與Cookie使用。",
			link: "https://gdpr.sjcorp.com.tw/tw/",
			gdpr_agree_text: "我知道了"
		}
	}
	var userLang = navigator.language || navigator.userLanguage;
//	var strLang = (userLang=="zh-TW")?str.tw:str.en;
	if (userLang=="zh-TW") {
		var strLang = str.tw
	} else if (userLang=="zh-tw"){
		var strLang = str.tw
	} else {
		var strLang = str.en
	}
	var gdpr_head = document.getElementsByTagName("head");
	var style = '#gdpr_mob{display: none;}#gdpr_fixbtm{box-shadow:3px 3px 9px #dedede;font-family: 微軟正黑體;width:100%;padding:40px 30px;padding-bottom: 25px;color:#666;background:rgba(255, 255, 255, 0.95);position:fixed;z-index:99999;bottom:0;left:0;text-align:left;font-size:14px;line-height:24px;animation-name:gdpr_agree_fadeInUp;animation-duration:2s;animation-fill-mode:both}#gdpr_in{max-width:1320px;margin: 0 auto;padding-right:220px;position: relative;padding-bottom: 15px;}#gdpr_fixbtm p{margin-top: 0;font-size: 20px;line-height: 30px;font-weight: 600;color: #333;margin-bottom:10px;}#gdpr_fixbtm,#gdpr_fixbtm *{box-sizing:border-box}#gdpr_fixbtm a{text-decoration:underline;color:#333;display:inline;}#gdpr_agree{background: #e10505;color:#fff;display:inline-block;font-size:14px;line-height: 14px;position:absolute;top:50%;right:0px;transform: translate(0, -50%);-moz-transform: translate(0, -50%);-o-transform: translate(0, -50%);-webkit-transform: translate(0, -50%);cursor:pointer;padding: 15px 27px;}#gdpr_agree a{color:#fff;text-decoration:none}@keyframes gdpr_agree_fadeInUp{0%{opacity:0;transform:translateY(100%)}50%{opacity:0;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}@media screen and (max-width: 767px) {#gdpr_pc{display: none;}#gdpr_mob{display: block;}#gdpr_in {padding-right: 0;}#gdpr_agree {transform: translate(0, 0);-moz-transform: translate(0, 0);-o-transform: translate(0, 0);-webkit-transform: translate(0, 0);left: 0;bottom: 0;right: inherit;top: inherit;font-size: 13px;line-height: 13px;padding: 10px 20px;}#gdpr_in {padding-bottom: 45px;}#gdpr_fixbtm{padding: 15px 30px;font-size: 13px;line-height: 22px;}#gdpr_fixbtm p{font-size: 18px;line-height: 28px;margin-bottom: 5px;}}';

	if(document.createStyleSheet){//兼容ie8
	    var cssStyle = document.createStyleSheet();
	    cssStyle.cssText = style;
	} else {
		var gdpr_style = document.createElement('style');
		gdpr_style.type = 'text/css';
		var gdpr_text = document.createTextNode(style);
		gdpr_style.appendChild(gdpr_text);
		gdpr_head[0].appendChild(gdpr_style);
	}
	var gdpr_body = document.getElementsByTagName("body");
	var gdpr_fixbtm = document.createElement('div');
	var gdpr_div = document.createElement("div");
    var gdpr_div_pc = document.createElement("div");
    var gdpr_div_mob = document.createElement("div");

	gdpr_fixbtm.appendChild(gdpr_div);
	gdpr_div.setAttribute("id", "gdpr_in");  
    gdpr_div.appendChild(gdpr_div_pc);
    gdpr_div_pc.setAttribute("id", "gdpr_pc");
    gdpr_div.appendChild(gdpr_div_mob);
    gdpr_div_mob.setAttribute("id", "gdpr_mob");
    
    
	var gdpr_p = document.createElement("p");
	var gdpr_p_text = document.createTextNode(strLang.gdpr_title);
	gdpr_p.appendChild(gdpr_p_text);
	gdpr_div_pc.appendChild(gdpr_p);


	var gdpr_fixbtm_text = document.createTextNode(strLang.gdpr_fixbtm);
	gdpr_div_pc.appendChild(gdpr_fixbtm_text);
    var gdpr_fixbtm_text_m = document.createTextNode(strLang.gdpr_fixbtm_m);
	gdpr_div_mob.appendChild(gdpr_fixbtm_text_m);
    
	gdpr_body[0].appendChild(gdpr_fixbtm);
	gdpr_fixbtm.setAttribute("id", "gdpr_fixbtm");

	var gdpr_a = document.createElement("a");
	var gdpr_a_text = document.createTextNode(strLang.gdpr_a_text);
	gdpr_a.appendChild(gdpr_a_text);
	gdpr_a.setAttribute("href", strLang.link);
	gdpr_a.setAttribute("target", "_blank");
	gdpr_div_pc.appendChild(gdpr_a);
    
    var gdpr_a_m = document.createElement("a");
	var gdpr_a_text_m = document.createTextNode(strLang.gdpr_a_text);
	gdpr_a_m.appendChild(gdpr_a_text_m);
	gdpr_a_m.setAttribute("href", strLang.link);
	gdpr_a_m.setAttribute("target", "_blank");
    gdpr_div_mob.appendChild(gdpr_a_m);

	var gdpr_fixbtm_text2 = document.createTextNode(strLang.gdpr_a_text2);
	gdpr_div_pc.appendChild(gdpr_fixbtm_text2);
    
    var gdpr_fixbtm_text2_m = document.createTextNode(strLang.gdpr_a_text2_m);
	gdpr_div_mob.appendChild(gdpr_fixbtm_text2_m);

	var gdpr_agree = document.createElement("div");
	var gdpr_agree_text = document.createTextNode(strLang.gdpr_agree_text);
	gdpr_agree.appendChild(gdpr_agree_text);
	gdpr_agree.setAttribute("id", "gdpr_agree");
	gdpr_agree.setAttribute("onClick", "gdpr_agree_hide();");
	gdpr_div.appendChild(gdpr_agree);

	var gdpr_body = document.getElementsByTagName("body");
	var gdpr_body_height = parseInt(gdpr_body[0].style.paddingBottom)+parseInt(gdpr_fixbtm.offsetHeight);
	gdpr_body[0].style.paddingBottom = gdpr_body_height+"px";
}
function gdpr_agree_hide(){
	// localStorage.setItem('gdpr_agree','agree');
	document.cookie = "gdpr_agree=agree;path=/";

	gdpr_fixbtm.style.display = "none";
}
// (localStorage.gdpr_agree != "agree") && add_gdpr();
(!document.cookie.match(/gdpr_agree=agree/i)) && add_gdpr();