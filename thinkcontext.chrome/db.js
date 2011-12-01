tc = {
    dbName: 'thinkcontext'
    , tables: {
	source: {
	    fields: {
		id: 'integer primary key'
		, source: 'text'
		, name: 'text'
		, link: 'text'
		, icon: 'text'
	    }
	    , googFTNumber: '1040216'
	    , version: '0.04'
	}
	, reverse: {
	    fields: {
		id: 'integer primary key'
		, source: 'text'
		, reverse_link: 'text'
		, title: 'text'
		, link: 'text'
	    }
	    , googFTNumber: '1049740'
	    , version: '0.05'
	}
	, stocks: {
	    fields: {
		id: 'integer primary key'
		, symbol: 'text'
		, exchange: 'text'
		, data: 'text'
	    }
	    , googFTNumber: '892855'
	    , version: '0.01'
	}
	, results: { 
	    fields: {
		id:'integer primary key'
		, key: 'text'
		, url: 'text'
		, func: 'text'
		, data: 'text'
	    }
	    , googFTNumber: '2186764'
//	    , googFTNumber: '2038546'
	    , version: '0.03'
	}
	, subverts: { 
	    fields: {
		id: 'integer'
		, sdid: 'integer'
		, txt: 'text'
		, location: 'text'
		, bin_op: 'text'
		
	    }
	    , googFTNumber: '2038549' 
	    , version: '0.02'
	}
	, place: {
	    fields: {
		id: 'integer'
		, pdid: 'integer'
		, type: 'text'
		, siteid: 'text'
	    }
	    , googFTNumber: '2186393'
//	    , googFTNumber: '1386568'
	    , version: '0.04'
	}
	, place_data: {
	    fields: {
		id: 'integer primary key'
		, data: 'text'
		, type: 'text'
	    }
//	    , googFTNumber: '1386562'
	    , googFTNumber: '2186651'
	    , version: '0.04'
	}
    }

    , tableFieldsLength: function(t){
	var i = 0;
	for(var x in tc.tables[t].fields){
	    i++;
	}
	return i;
    }

    , tableFields: function(t){
	var r = '';
	for(var f in tc.tables[t].fields){
	    if(r == ''){
		r = f;
	    } else {
		r+=", " + f;
	    }
	}
	return r;
    }

    , tableFieldsTypes: function(t){
	var r = '';
	for(var f in tc.tables[t].fields){
	    if(r == ''){
		r = f + " " + tc.tables[t].fields[f];
	    } else {
		r+=", " + f + " " + tc.tables[t].fields[f];
	    }
	}
	return r;
    }

    , googFT : 'https://www.google.com/fusiontables/api/query?sql='

    , checkLocalTableVersion: function(t){
	return localStorage.getItem(t + 'version') == tc.tables[t].version;
    }
    , setLocalTableVersion: function(t){
	localStorage.setItem(t + 'version', tc.tables[t].version);
    }

    , checkLocalDeleteTime: function(t){
	return localStorage.getItem(t + 'deletetime');
    }
    , setLocalDeleteTime: function(t){
	var d = new Date;
	localStorage.setItem(t + 'deletetime', d.getTime());
    }
    , checkLocalAddTime: function(t){
	return localStorage.getItem(t + 'addtime');
    }
    , setLocalAddTime: function(t){
	var d = new Date;
	localStorage.setItem(t + 'addtime', d.getTime());
    }
    , initializeLocalDB: function(){
	if(!tc.loadAllTables()){
	    //console.log('Database init failed!'); // todo notify the user or try again later
	}
    }
    , connectSubvDB: function(){
	if(tc.db = openDatabase(tc.dbName, '1.0', tc.dbName, 20*1024*1024)){
	    tc.loadAllTables(); // see if tables at least are the right version
	    setTimeout(tc.updateAllTables,10000); // do at idle?
	}
    }

    , onSuccess: function(tx,r){
	//console.log("success");
    }
    
    , onError: function(tx,e){
	//console.log("db error: " + e.message);
    }
    
    , loadAllTables: function(){
	for(var t in tc.tables){
	    if(!tc.checkLocalTableVersion(t)){
		tc.loadTable(t);
	    } else {
		tc.checkNoTable(t);
	    }
	}
    }
    , checkNoTable: function(table){
	tc.db.transaction(
	    function(tx){
		tx.executeSql("select count(*) from " + table
			      ,[]
			      ,null
			      ,function(){ tc.loadTable(table) })});
    }
    , updateAllTables: function(){
	for(var t in tc.tables){
	    tc.updateTable(t);
	}
    }
    
    , updateTable: function(table){
	var dateClause = '';
	var secs;
	if(secs=tc.checkLocalDeleteTime(table)){
	    dateClause = "and dm >= " + secs;
	}

	var query  = encodeURI(tc.googFT + "SELECT id FROM " + tc.tables[table].googFTNumber + " WHERE status not equal to 'A' " + dateClause);
	$.get(query,{},function(data){
	    var dataArray = CSVToArray(data);
	    if(dataArray.length > 1){ // see if there's any data to insert
		tc.db.transaction(
		    function(tx){
			var deleteTxt = "DELETE FROM " + table + " WHERE id = ? ";
			dataArray = dataArray.slice(1);
			for (var r in dataArray){
			    tx.executeSql(deleteTxt
					  , dataArray[r], function(){tc.setLocalDeleteTime(table);}, tc.onError);
			}
		    }
		);
	    }
	});

	dateClause = '';
	if(secs=tc.checkLocalAddTime(table)){
	    dateClause = "and da >= " + secs;
	}
	query = encodeURI(tc.googFT + "SELECT " + tc.tableFields(table) + " FROM " + tc.tables[table].googFTNumber + " WHERE status = 'A' " + dateClause);
	$.get(query,{},function(data){
	    var dataArray = CSVToArray(data);
	    var len = tc.tableFieldsLength(table);
	    if(dataArray.length > 1 && dataArray[0].length == len){ // see if there's any data to insert and the number of fields is right
		tc.db.transaction(
		    function(tx){
			dataArray = dataArray.slice(1);
			for (var r in dataArray){
			    if(dataArray[r].length == len){
				var insertTxt = "INSERT INTO " + table + "( " + tc.tableFields(table) + ") VALUES ( " + "?" + ",?".repeat(tc.tableFields(table).split(',').length - 1) + ") ";
				tx.executeSql(insertTxt
					      , dataArray[r]
					      , function(){tc.setLocalTableVersion(table);
							   tc.setLocalAddTime(table);}
					      , tc.onError
					     );
			    }
			}
		    }
		);
	    }
	});
    }
    
    , loadTable: function(table){
	var query;
	query = encodeURI(tc.googFT + "SELECT " + tc.tableFields(table) + " FROM " + tc.tables[table].googFTNumber + " WHERE status = 'A'");
	$.get(query,{},function(data){
	    var dataArray = CSVToArray(data);
	    var len = tc.tableFieldsLength(table);
	    if(dataArray.length > 1 && dataArray[0].length == len){ // see if there's any data to insert and the number of fields is right
		tc.db.transaction(
		    function(tx){
			var dropTxt = "DROP TABLE IF EXISTS " + table;
			var createTxt = "CREATE TABLE " + table +"( " + tc.tableFieldsTypes(table) + " )";
			var insertTxt = "INSERT INTO " + table + "( " + tc.tableFields(table) + ") VALUES ( " + "?" + ",?".repeat(tc.tableFields(table).split(',').length - 1) + ") ";
			tx.executeSql(dropTxt,[]
				      , tc.onSuccess, tc.onError);
			tx.executeSql(createTxt
				      , []
				      , tc.onSuccess, tc.onError);
			dataArray = dataArray.slice(1);
			for (var r in dataArray){
			    if(dataArray[r].length == len){
				tx.executeSql("INSERT INTO " + table + "( " + tc.tableFields(table) + ") VALUES ( " + "?" + ",?".repeat(tc.tableFields(table).split(',').length - 1) + ") " 
					      , dataArray[r], function(){tc.setLocalTableVersion(table);tc.setLocalAddTime(table);tc.setLocalDeleteTime(table)}, tc.onError);
			    }
			}
		    }
		);
	    }
	});
    }
    
    , onLookupSuccessMany: function(tx, r, request, callback){
	if(r.rows.length > 0){
	    request.data = [];
	    for(var i=0;i<r.rows.length;i++){
		request.data[i]=r.rows.item(i);
	    }
	    callback(request);
	}
    }
    , onLookupSuccess: function(tx, r, request, callback){
	if(r.rows.length > 0){
	    request.data = r.rows.item(0);;
	    callback(request);
	}
    }

    , lookupResult: function(key, request, callback){
	tc.db.transaction(
	    function(tx){
		var selTxt = "SELECT * FROM results WHERE ? = key or ? like key || '/%' or ? like '%.' || key || '/%' or ? like '%.' || key  LIMIT 1";
		//console.log(selTxt);
		//console.log(key);
		tx.executeSql(selTxt
			      , [key,key,key,key]
			      , function(tx,r){ 
				  tc.onLookupSuccess(tx,r,request, callback)
			      }
			      , tc.onError);
	    }
	);
    }
    , lookupStock: function(key,request,callback){
	var keysplit = key.split(':');
	var selTxt;
	if(keysplit.length > 1){
	    keysplit[1] = keysplit[1].toUpperCase();
	    var selTxt = "SELECT * FROM stocks WHERE exchange = ? and symbol = ?";
	} else {
	    keysplit[0] = keysplit[0].toUpperCase();
	    var selTxt = "SELECT * FROM stocks WHERE symbol = ?";
	}
	tc.db.transaction(
	    function(tx){
		tx.executeSql(selTxt
			      , keysplit
			      , function(tx,r){ 
				  tc.onLookupSuccess(tx,r,request, callback)
			      }
			      , tc.onError);
	    }
	);
    }
    , lookupPlace: function(key,request,callback){
	tc.db.transaction(
	    function(tx){
		var selTxt = "SELECT pd.id, pd.type FROM place p inner join place_data pd on pd.id = p.pdid WHERE siteid = ? and p.type = ? LIMIT 1";
		//console.log(selTxt + " " + key + " " + request.type);
		tx.executeSql(selTxt
			      , [key,request.type]
			      , function(tx,r){ 
				  tc.onLookupSuccess(tx,r,request, callback)
			      }
			      , tc.onError);
	    }
	);
    }
    , lookupPlaces: function(request,callback){
	//console.log("lookupPlaces");
	//console.log(request);
	var data = request.data;
	var i;
	var inStmt = "('" + request.data.map(function(x){ return x.cid }).join("' , '") + "')";
	
	tc.db.transaction(
	    function(tx){
		var selTxt = "SELECT p.siteid, pd.id, pd.type FROM place p inner join place_data pd on pd.id = p.pdid WHERE siteid in " + inStmt +" and p.type = ?";
		//console.log(selTxt + " " + request.type);
		tx.executeSql(selTxt
			      , [request.type]
			      , function(tx,r){tc.onLookupSuccessMany(tx,r,request,callback)}
			      , tc.onError);
	    }
	);
    }

    , lookupReverse: function(key,request,callback){
	// find reverse links and some other links to the same site
	var host = getReverseHost(key);
	var selTxt = "select distinct min(id) id, s, title, link, reverse_link, name, source, source_link, icon from ( SELECT 'exact' s,r.id, reverse_link, title, r.link, s.name, s.source, s.link source_link, s.icon FROM reverse r left outer join source s on s.source = r.source WHERE reverse_link = ? union SELECT 'not exact',r.id, r.reverse_link, r.title, r.link, s.name, s.source, s.link source_link, s.icon FROM reverse r left outer join source s on s.source = r.source left outer join ( SELECT 'exact' s,r.id, r.reverse_link, title, r.link, s.name, s.link source_link, s.icon FROM reverse r left outer join source s on s.source = r.source WHERE r.reverse_link = ? ) o on o.link = r.link WHERE ( r.reverse_link like 'http://%.'||?||'/%' or r.reverse_link like 'http://'||?||'/%' ) and r.reverse_link <> ? and o.link is null ) t group by s, title, link, name, source, source_link, icon order by s, id desc limit 5;"
	//var selTxt = "SELECT distinct 'exact' s, reverse_link, title, r.link, s.source, s.name, s.link source_link, s.icon FROM reverse r left outer join source s on s.source = r.source WHERE reverse_link = ? ";
	
	tc.db.transaction(
	    function(tx){
		tx.executeSql(selTxt
			      , [key,key,host,host,key]
			      , function(tx,r){ 
				  tc.onLookupSuccessMany(tx,r,request, callback)
			      }
			      , tc.onError);
	    });
    }

    , lookupReverseHome: function(key,request,callback){
	key = arrayQuoteEscape(key);
	var selTxt = "SELECT distinct min(r.id) id, 'exact' s, reverse_link, title, r.link, s.source, s.name, s.link source_link, s.icon FROM reverse r left outer join source s on s.source = r.source WHERE reverse_link in ('" + key.join("','") + "') group by 'exact', reverse_link, title, r.link, s.source, s.name, s.link, s.icon";
	request.key = '';
	tc.db.transaction(
	    function(tx){
		tx.executeSql(selTxt
			      , []
			      , function(tx,r){ 
				  tc.onLookupSuccessMany(tx,r,request, callback)
			      }
			      , tc.onError);
	    });
    }


    , lookupSubvert: function(key, request, callback){
	tc.db.transaction(
	    function(tx){
		var selTxt = "select sd.id, data, url from subverts s join results sd on sd.id = s.sdid where s.txt = ? ";
		tx.executeSql(selTxt
			      , [key]
			      , function(tx,r){ 
				  tc.onLookupSuccessMany(tx,r,request, callback)
			      }
			      , tc.onError);
	    });
    }

    , sendStat: function(key){
	$.get('http://thinkcontext.org/s/?' + key);
    }
};

