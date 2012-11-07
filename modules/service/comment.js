var comment_db = require('../database/comment.js');

module.exports = {
	
	// 댓글 등록
	write: function(req, res){
		comment_db.add(req.body, function(result){
			if(result == true){
				console.log('service/comment.js, write_success');
				res.json({result:true});
			}
			else {
				console.log('service/comment.js, write_fail');
				res.json({result:false});
			}
		});		// end of add
	}		// end of write
	
	
	// 댓글 삭제
	,remove: function(req,res){
		comment_db.remove(req.body.index, function(result){
			if(result == true){
				console.log('service/comment.js, remove)success');
				res.json({result:ture});
			}
			else {
				console.log('service/comment.js, remove_fail');
				res.json({result:false});
			}
		});		// end of remove
	}	// end of remove


	// 댓글 수정
	,modify: function(req, res){
		var tmp = req.body;
		var update = {};
		
		update[name] = tmp.name;
		update[content] = tmp.content;
		update[index_board] = tmp.index_board;
		update[index] = tmp.index;
		update[date] = tmp.date;
		
		comment_db.update(tmp.index, update, function(result){
			if(result == true){
				console.log('service/comment.js, modify_success');
				res.json({result:true});
			}
			else {
				console.log('servec/comment.js, modify_fail');
				res.json({result:false});
			}
		}); 	// end of update
	}	// end of modify


	// 게시물에 맞춘 댓글 리스트
	,list: function(req, res){
		var current_page = req.body.current_page || 1;
		var paging_size = 10;
		comment_db.get_list(current_page, paging_size, function(result){
			if(result != false){
				console.log('service/comment.js, list_success');
				res.json(result);
			}
			else {
				console.log('service/comment.js, list_fail');
			}
		}); // end of get_list
	}		// end of list
	
	
}	// end of module exports
