tc.facebook = {};

tc.registerResponse('link', function(request){
    $("[sid=" + request.sid +"]").map(function(){
	tc.resultPrev(this,request.key,request.data);});
});

tc.facebook.examine = function(){
    console.log('examine');
    $('div.ego_unit > div:first-child > div:first-child > a:nth-child(2) > div[title] > div:nth-child(2)').not('[sid]').map(
	function(){
	    var sid = "gs" + tc.random();
	    this.setAttribute("sid",sid);
	    tc.sendMessage({kind: 'link'
     			    , sid: sid
     			    , key: tc.sigURL(this.textContent)});
	    
	});}

tc.facebook.examine();

function summaryCallback(summaries){
    tc.facebook.examine();
}

var $observerSummaryRoot = $("div.ego_column");
$observerSummaryRoot.mutationSummary("connect"
				     , summaryCallback
				     , [{ element: "div.ego_unit" }]);
