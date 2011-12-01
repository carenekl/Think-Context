/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is sqlite.
 *
 * The Initial Developer of the Original Code is
 * Julian Ceballos <cristianjulianceballos@gmail.com>.
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   NULL
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

const {Cc,Ci} = require("chrome");

const fileDirectoryService = Cc["@mozilla.org/file/directory_service;1"].
                            getService(Ci.nsIProperties).
                            get("ProfD",Ci.nsIFile);

const storageService = Cc["@mozilla.org/storage/service;1"].
                        getService(Ci.mozIStorageService);
/*Here is all the data about the current connection with sqlite*/
let connection = null;

/*Local function that make the query async*/
function queryAsync(statement, success, failure){
    /*sqrObject have the information about the result of query*/
    let sqrObject = new Object();
    sqrObject.data = new Array();
    sqrObject.cols = 0;
    sqrObject.rows = 0;
    try{
	let query = connection.createStatement(statement);
	query.executeAsync({
            handleResult:function(resultSet){
		for(var row=resultSet.getNextRow();row;row=resultSet.getNextRow()){
                    sqrObject.cols = row.numEntries;
                    let dataRow = new Array(sqrObject.cols);
                    for(var i=0;i<sqrObject.cols;i++){
			dataRow[i] = row.getResultByIndex(i);
                    }
                    sqrObject.data[sqrObject.rows] = dataRow;
                    sqrObject.rows++;
		}
            },
            handleError:function(error){
		success(null,error);
            },
            handleCompletion:function(reason){
		success(sqrObject,reason);
            }
	});
    } 
    catch(e){
	failure(e,statement);
    }
}
function queryAsyncMany(statements,success){
    /*sqrObject have the information about the result of query*/
    let queries = [];
    for(s in statements){
	let query = connection.createStatement(statements[s]);
	queries.push(query);
    }
    connection.executeAsync(queries,queries.length
			    ,{ handleCompletion: 
			       function(reason){
				   if(reason == 0){ 
				       success() }
			       }
			       , handleError: function(error){            console.error(error.name+' - '+error.message);}
			       , handleResult: function(resultSet){}
			     });
}

/*global method to connect with sqlite*/
exports.connect = function connect(database){
    fileDirectoryService.append(database);
    connection = storageService.openDatabase(fileDirectoryService);
}

/*global method for execute any kind of instruction in sqlite*/
exports.execute = function execute(statement){
    if(execute.arguments.length==1){
        try{
            connection.executeSimpleSQL(statement);
        }
        catch(e){
            console.error(e.name+' - '+e.message);
        }
    }
    else{
        try{
            queryAsync(statement,execute.arguments[1],execute.arguments[2]);
        }
        catch(e){
            console.error(e.name+' -- '+e.message);
        }
    }
}

exports.executeMany = function executeMany(statements, success){
    try{
	queryAsyncMany(statements,success);
    }
    catch(e){
	console.error(e.name + ' - ' +e.message);
	console.error(connection.lastErrorString);
    }
}

/*global method to close connection with sqlite*/
exports.close = function close(){
    connection = null;
}