function _GET(){
    var get = new Array();
    if(location.search.length > 1){
        var search = unescape(decodeURI(location.search));
        var requests = search.substr(1).split("&");
        for(var i = 0; i < requests.length; i++){
            var r = requests[i].split("=");
            get[r[0]] = r[1];
        }
    }
    return get;
}

function judge(){
    var get = _GET();
    if('str' in get){
	var str = get['str'];
	if(/^[ぁ-ゞ|ー]+$/.test(str)){
            if(str.length < 7){
		document.write("レギュレーション違反！");
            }
            else{
		var l = str.length;
		var ta = str.charAt(l-1);
		var ba = str.charAt(l-2);
		str = str.substr(-7);
		var ans = ba + ta + "で" + ba + ta + ba + ta;
		if(str == ans){
		    document.write("おもしろい！");
		}
		else{
		    document.write("レギュレーション違反");
		}
            }
	}
	else{
            document.write("ひらがなでおねがい");
	}
    }
    else{
        document.write("なんか変やで");
    }
}
