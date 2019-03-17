
const billModule = {};
const noteModule = {
    noteInfoIncache : ""
};
const memoModule = {
    memoInfoIncache : ""
};
function loger( txt ) {
    $.alert( {
        title: '提示',
        text : txt,
    } );
};


function GoHashUrl( hashValue ) {
    window.location.href = "#" + hashValue;
};
/*
* {
      "errmsg": "请求成功",
      "errno": "0",
      "memos": [
        {
          "addtime": "2019-02-19 22:52:24",  # 备忘录添加时间
          "content": "人那个in仍而给您热ingi仍in日恩",
          "id": 2,
          "title": "哇哈哈"
        },
        {
          "addtime": "2019-02-20 09:36:37",  # 备忘录添加时间
          "content": "人那个in仍而给您热ingi仍in日恩",
          "id": 3,
          "title": "哇哈哈"
        }
      ]
    }
* */
/*
* callback( err, memos )
*
* return 一个备忘录数组
* */
memoModule.getAllMemoInfo = function ( callback ) {
    $.ajax( {
        url: globalUrl.httpServerUrl.memo,
        method: "GET",
        headers: {
            "Authorization" : window.localStorage.getItem("token")
        },

        success: function ( res ) {
            if( res.errno !== "0" ) {
                return callback( res[ "errmsg" ], null );
            }
            memoModule.memoInfoIncache = res[ "memo" ];
            return callback( null, res[ "memo" ] );

        },
        error: function ( err ) {

            return callback( "返回" + err.status + "信息为:" + err.responseText, null );
        }

    } )

};

/*
* {
  "errmsg": "请求成功",
  "errno": "0",
  "memo": {
    "addtime": "2019-02-19 22:52:24",
    "content": "人那个in仍而给您热ingi仍in日恩",
    "id": 2,
    "title": "哇哈哈"
  }
}
@param1 memoId，备忘录id [String]
@param2 callback，回调函数 [ Function]
* */
memoModule.getMemoInfoById = function ( memoId, callback ) {
    $.ajax( {
        url: globalUrl.httpServerUrl.memo + memoId + "/",
        method: "GET",
        headers: {
            "Authorization" : window.localStorage.getItem("token")
        },

        success: function ( res ) {
            if( res.errno !== "0" ) {
                return callback( res[ "errmsg" ], null );
            }
            return callback( null, res[ "memo" ] );

        },
        error: function ( err ) {

            return callback( "返回" + err.status + "信息为:" + err.responseText, null );
        }

    } )

};

/*
* param1 memoId [String] 备忘录id
* param2 changeData [Object] 修改数据
* param3 callback [Function] 回调函数
* */
memoModule.putMemoInfoById = function ( memoId, changeData, callback ) {

    if( !changeData.title || !changeData.content ) {
        return callback( "参数传递错误" + JSON.stringify(changeData), null );
    }

    $.ajax( {
        url: globalUrl.httpServerUrl.memo + memoId + "/",
        method: "PUT",
        headers: {
            "Authorization" : window.localStorage.getItem("token")
        },
        data: JSON.stringify( changeData ),
        success: function ( res ) {
            if( res.errno !== "0" ) {
                return callback( res[ "errmsg" ], null );
            }
            return callback( null, true );

        },
        error: function ( err ) {

            return callback( "返回" + err.status + "信息为:" + err.responseText, null );
        }

    } )

};

/*
* param1 memoData [Object] 添加备忘录内容
{
    "title":"哇哈哈",  # 备忘录标题  必须参数
    "content":"人那个in仍而给您热ingi仍in日恩"  # 备忘录内容 必须参数
    "is_warn": true  # 可选参数 为boolen类型
    "warn_time": "2018-5-12 08:15:30"  # 提醒时间  必须为DateTime类型  可选参数 在is_warn为true的时候为必须参数
}
* param2 callback [Function] 回调函数
* */
memoModule.postMemoInfo = function ( changeData, callback ) {

    if( !changeData.title || !changeData.content ) {
        return callback( "参数传递错误" + JSON.stringify(changeData), null );
    }

    $.ajax( {
        url: globalUrl.httpServerUrl.memo,
        method: "POST",
        headers: {
            "Authorization" : window.localStorage.getItem("token")
        },
        data: JSON.stringify( changeData ),
        success: function ( res ) {
            if( res.errno !== "0" ) {
                return callback( res[ "errmsg" ], null );
            }
            return callback( null, res[ "errmsg" ] );

        },
        error: function ( err ) {

            return callback( "返回" + err.status + "信息为:" + err.responseText, null );
        }
    } )

};

/*
* param1 memoId [Object] 备忘录id
* param2 callback [Function] 回调函数
* */
memoModule.delteMemoInfoById = function ( memoId, callback ) {

    if( !memoId ) {
        return callback( "不存在备忘录id",null );
    }

    $.ajax( {
        url: globalUrl.httpServerUrl.memo + memoId + "/",
        method: "DELETE",
        headers: {
            "Authorization" : window.localStorage.getItem("token")
        },
        success: function ( res ) {
            if( res.errno !== "0" ) {
                return callback( res[ "errmsg" ], null );
            }
            return callback( null, res[ "errmsg" ] );

        },
        error: function ( err ) {
            return callback( "返回" + err.status + "信息为:" + err.responseText, null );
        }
    } )

};

billModule.getAllBillInfo = function ( callback ) {

    $.ajax( {
        url: globalUrl.httpServerUrl.memo,
        method: "GET",
        headers: {
            "Authorization" : window.localStorage.getItem("token")
        },

        success: function ( res ) {
            if( res.errno !== "0" ) {
                return callback( res[ "errmsg" ], null );
            }
            return callback( null, res[ "memo" ] );

        },
        error: function ( err ) {

            return callback( "返回" + err.status + "信息为:" + err.responseText, null );
        }

    } )


};


/*
* param1 noteData [Object] 添加备忘录内容
{
    "title":"哇efwef侮辱人格我哈",  # 必须参数
    "content":"人那个iwgwrgr问过我如果n日恩"  # 必须参数
}
* param2 callback [Function] 回调函数
* */
noteModule.postNoteInfo = function ( noteData, callback ) {

    if( !noteData.title || !noteData.content ) {
        return callback( "参数传递错误" + JSON.stringify(noteData), null );
    }

    $.ajax( {
        url: globalUrl.httpServerUrl.note,
        method: "POST",
        headers: {
            "Authorization" : window.localStorage.getItem("token")
        },
        data: JSON.stringify( noteData ),
        success: function ( res ) {
            if( res.errno !== "0" ) {
                return callback( res[ "errmsg" ], null );
            }
            return callback( null, res[ "errmsg" ] );

        },
        error: function ( err ) {

            return callback( "返回" + err.status + "信息为:" + err.responseText, null );
        }
    } )

};

/*
* callback( err, note_list )
*
* return 一个noteArr数组
* */
noteModule.getAllNoteInfo = function ( callback ) {

    $.ajax( {
        url: globalUrl.httpServerUrl.note,
        method: "GET",
        headers: {
            "Authorization" : window.localStorage.getItem("token")
        },
        success: function ( res ) {
            if( res.errno !== "0" ) {
                return callback( res[ "errmsg" ], null );
            }
            noteModule.noteInfoIncache = res[ "notes_list" ];
            return callback( null, res[ "notes_list" ] );

        },
        error: function ( err ) {

            return callback( "返回" + err.status + "信息为:" + err.responseText, null );
        }

    } )


};


/*
* {
  "errmsg": "请求成功",
  "errno": "0",
  "notes": {
    "addtime": "2019-02-20 14:43:26",
    "content": "人那个in仍而给您热ingi仍in日恩",
    "id": 2,
    "title": "哇哈哈"
  }
}
@param1 noteId [String]
@param2 callback，回调函数 [ Function]
* */
noteModule.getNoteInfoById = function ( noteId, callback ) {
    $.ajax( {
        url: globalUrl.httpServerUrl.note + noteId + "/",
        method: "GET",
        headers: {
            "Authorization" : window.localStorage.getItem("token")
        },

        success: function ( res ) {
            if( res.errno !== "0" ) {
                return callback( res[ "errmsg" ], null );
            }
            return callback( null, res[ "notes" ] );

        },
        error: function ( err ) {

            return callback( "返回" + err.status + "信息为:" + err.responseText, null );
        }

    } )

};

/*
* param1 noteId [String] 笔记本id
* param2 changeData [Object] 修改数据
* param3 callback [Function] 回调函数
* */
noteModule.putNoteInfoById = function ( noteId, changeData, callback ) {

    if( !changeData.title || !changeData.content ) {
        return callback( "参数传递错误" + JSON.stringify(changeData), null );
    }

    $.ajax( {
        url: globalUrl.httpServerUrl.note + noteId + "/",
        method: "PUT",
        headers: {
            "Authorization" : window.localStorage.getItem("token")
        },
        data: JSON.stringify( changeData ),
        success: function ( res ) {
            if( res.errno !== "0" ) {
                return callback( res[ "errmsg" ], null );
            }
            return callback( null, res[ "errmsg" ] );

        },
        error: function ( err ) {

            return callback( "返回" + err.status + "信息为:" + err.responseText, null );
        }

    } )

};

/*
* param1 noteId [Object] 笔记本id
* param2 callback [Function] 回调函数
* */
noteModule.delteNoteInfoById = function ( noteId, callback ) {

    if( !noteId ) {
        return callback( "不存在备忘录id",null );
    }

    $.ajax( {
        url: globalUrl.httpServerUrl.memo + noteId + "/",
        method: "DELETE",
        headers: {
            "Authorization" : window.localStorage.getItem("token")
        },
        success: function ( res ) {
            if( res.errno !== "0" ) {
                return callback( res[ "errmsg" ], null );
            }
            return callback( null, res[ "errmsg" ] );

        },
        error: function ( err ) {
            return callback( "返回" + err.status + "信息为:" + err.responseText, null );
        }
    } )

};