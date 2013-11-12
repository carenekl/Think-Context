// ==UserScript==
// @name bing-search.js
// @include http://*.bing.com/*
// @include https://*.bing.com/*
// @require jquery-1.10.2.min.js
// @require jquery-ui-1.9.2.custom.min.js
// @require jquery-ui.css.js
// @require ejs_production.js
// @require utils.js
// ==/UserScript==

console.log('bing-search');

// result link
tc.searchLinkExam('ol#b_results li.b_algo h2 a','bing-search');


// ads
tc.searchLinkExam('ol#b_context li.b_ad div.sb_add:has(h2 > a) div.b_caption > div.b_attribution > cite'
		  ,'bing-search'
		  , function(x){ return x.parentElement.parentElement.parentElement.children[0].children[0];}
		 , function(x){
		     console.log('getval',x);
		     return x.textContent;});
// $('ol#b_results li.b_ad div.sb_add:has(h2 > a) div.b_caption > div.b_attribution > cite').map(
//     function(){
// 	var mlink = this.parentElement.parentElement.parentElement.children[0].children[0];
// 	var sid = "gs" + tc.random();
// 	mlink.setAttribute("sid",sid);
// 	tc.sendMessage({kind: 'domain'
// 			,source: 'bing-search'
//      			, sid: sid
//      			, key: tc.sigURL(this.textContent).replace(/https?:\/\//,'').replace(/\/$/,'') });

//     }
// );

