(function clearAd (argument) {
    console.info("clear start");

    var ad_ids = [
    	//脚本之家
    	"cproIframe2001holder",
    	"baidu300",
    	"cproIframe2002holder",
    	"art_1",
    	"art_2",
    	"art_3",
    	"tonglan1",
    	"con_all",
    	"logo_m",
    	"con_da2",
    	//微博
    	"v6_pl_content_biztips",
    	"v6_pl_rightmod_rank",
    	"v6_trustPagelet_recom_member",
    	//baidu
    	"5001",
    	"5002"
    ];

    var ad_classes = [
    	"art_bot_ad",
    	"tonglanad",
    	"sm"
    ];

    $(document).ready(function(){
	    for(var i=0,len=ad_ids.length;i<len;i++){
	    	$("#" + ad_ids[i]).remove();
	    }

	    for(var i=0,len=ad_classes.length;i<len;i++){
	    	$("." + ad_classes[i]).remove();
	    }

	    //简单的广告智能预测	
	    $("iframe").hide();
	    $("div[id*='ad']").not("div[id*='head']").remove();
	    $("div[class*='ad']").not("div[class*='head']").remove();
	    if($("a:contains('推广链接')").parent().parent().attr("id").match(/content/)){
	    	$("a:contains('推广链接')").parent().hide()
	    }else{
	    	$("a:contains('推广链接')").parent().parent().hide();
	    }
	    
    	console.log("clear end");
    });
})();