tc.revEjs = " <%  \
var found = 0; \
var tcstat = 'rrr'; \
 \
if(ex){ \
 \
%> \
 \
<b>This link was mentioned in</b><br> \
	 \
<%   }  \
for(var x in data){ \
    if(data[x]['s'] != 'exact' && found == 0){ \
 \
%> \
<b>Other links to this site</b><br> \
<% \
	    found = 1;	 \
    } \
     \
%> \
 \
<li> \
 \
<% \
    if(tc.iconStatus[data[x].source] == 1){  \
%> \
<%=	img_tag(tc.iconDir + \"/\" + data[x].source + \".ico\" \
		, null \
		, { height: \"16\", width: \"16\", style: \"display:inline;\" }) %> \
<%    }  %> \
<%=    link_to(tc.htmlDecode(data[x].title) \
	    , data[x].link \
	    , {target: '_blank', tcstat: tcstat + data[x].id }) \
%> \
 \
by \
 \
<%=  link_to(data[x].name, data[x].source_link) %> \
links to \
<%=  link_to('this page',data[x].reverse_link) %> \
<% \
} \
 \
%> \
 \
";