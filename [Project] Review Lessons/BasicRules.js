// 접속 브라우저를 확인합니다.
function isBrowserCheck() {
    var agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf("msie") != -1) {
        var rv = -1;
        if (navigator.appName == "Microsoft Internet Explorer") {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
        }
        return "Internet Explorer" + rv;
    } else if (agt.indexOf("whale") != -1) return "Whale";
    else alert("No use this website.");
}
