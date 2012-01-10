if (window.top === window) {
if(! (/^http(s)?:\/\/www.google.com\//.test(document.URL)
|| /^http(s)?:\/\/maps.google.com\/maps\/place/.test(document.URL)
|| /^http(s)?:\/\/www.google.com\/finance/.test(document.URL)
|| /^http(s)?:\/\/bing.google.com\/search/.test(document.URL)
|| /^http(s)?:\/\/search.yahoo.com\/search/.test(document.URL)
     )
  ){    
//console.log("reverse");

tc.registerResponse('reverse', 
		    function(request){
			var data = request.data;
			var x;
			var found = 0;
			var ex = false;
			var text = '';
			var tcstat = 'rrr';
			if(data[0]['s'] == 'exact'){
			    ex = true;
			    text += "<b>This link was mentioned in</b><br> ";
			} 
			// else {
			//     text += "<b>No exact match</b><br>";
			// }
			for(x in data){
			    if(data[x]['s'] != 'exact' && found == 0){
				text += "<b>Other links to this site</b><br> ";
				found = 1;
			    }
			    text += "<li>";
			    if(tc.iconStatus[data[x].source] == 1){
				text += '<img style="display:inline;" height="16" width="16" src="'+tc.iconDir + "/" + data[x].source + ".ico"+'">';
			    }
			    
			    text += ' <a tcstat="' + tcstat + data[x].id + '" target="_blank" href="' + data[x].link + '">'+ tc.htmlDecode(data[x].title) + '</a> by <a target="_blank" href="' + data[x].source_link + '">' + data[x].name + '</a> links to <a href="'+ data[x].reverse_link + '">this page</a><br>';
			}
			tc.popDialog('Progressive Trackback', text, ex);				  
		    });

    tc.registerResponse('reversehome', tc.reverseResponse);
    
    tc.sendMessage(
	{'kind': 'reverse'
	 , 'key': tc.sigURL(document.baseURI)
	});
    
tc.reverseExamine();
safari.self.addEventListener("message",tc.onResponse, false);

}
}