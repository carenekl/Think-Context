if (window.top === window && !tc.found && document.domain.match(/(^|\.)kayak\.com$/)) {
    tc.found = true;
    $("a.hotelname[href*='.ksp']").not('[tcid]').map(
	function(){
	    var m;
	    if(m = this.href.match(/javascript:toggleHotelOverview\(([0-9]+)\)/)){
		var r = tc.random();
		this.setAttribute('tcid',r);
		tc.sendMessage({
		    kind: 'kayak'
		    , tcid: r
		    , handle: 'kayak:' + m[1]});
	    }
	});
}

