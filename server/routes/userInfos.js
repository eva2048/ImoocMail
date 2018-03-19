var express = require('express');
var router = express.Router();
var UserInfo = require('./../models/userInfo')
var Skill = require('./../models/skills')
var List=require('./../models/lists')

/* GET users listing. */
router.get('/', function(req, res, next) {
  var _callback=req.query.callback;
  UserInfo.find(function(err,doc){
  	if(err){
		res.json({
			status:'0',
			msg:err.message,
			result:''
		})
	}else{
		if(doc){
			var data={
				status:'1',
				msg:'',
				result:doc
			};
			if(_callback){
				res.type('text/javascript');
      			res.send(_callback + '(' + JSON.stringify(data) + ')');
			}else{
				res.json(data);
			}
		}
	}
  });
  
});
router.get('/skillList', function(req, res, next) {
  var _callback=req.query.callback;
  Skill.find(function(err,doc){
  	if(err){
		res.json({
			status:'1',
			msg:err.message,
			result:''
		})
	}else{
		if(doc){
			var data={
				status:'0',
				msg:'',
				result:doc
			};
			if(_callback){
				res.type('text/javascript');
      			res.send(_callback + '(' + JSON.stringify(data) + ')');
			}else{
				res.json(data);
			}
		}
	}
  });
  
});
router.post('/addSkill', function(req, res, next) {
  var userId=req.body.userId;
  var skill=JSON.parse(req.body.skill);
  UserInfo.findOne({userId:userId},function(err,userDoc){
  	if(err){
		res.json({
			status:"1",
			msg:err.message
		})
	}else{
		if(userDoc){
			let skillItem='';
			userDoc.skills.forEach(function(item){	
				if(item.skillName==skill.skillName){
					skillItem=item;
					item.skillLevel=skill.skillLevel;
					item.skillPercent=skill.skillPercent;
				}
			})
			if(skillItem){
				userDoc.save(function(err3,doc3){
					if(err3){
						res.json({
							status:"1",
							msg:err3.message
						})
					}else{
						res.json({
							status:'0',
							msg:'',
							result:'success'
						})
					}
				})
			}else{
				userDoc.skills.push(skill);
				userDoc.save(function(err2,doc2){
					if(err2){
						res.json({
							status:"1",
							msg:err2.message
						})
					}else{
						res.json({
							status:'0',
							msg:'',
							result:'suc'
						})
					}
				})
			}
		}else{

		}
	}
  })
  
});

router.get('/lists',function(req,res,next){
	var _callback=req.query.callback;
	List.find(function(err,doc){
		if(err){
			res.json({
				status:"1",
				msg:err.message,
				rusult:''
			})
		}else{
			var data={
				status:'0',
				msg:'',
				result:doc
			};
			if(_callback){
				res.type('text/javascript');
      			res.send(_callback + '(' + JSON.stringify(data) + ')');
			}else{
				res.json(data);
			}
		}
	})
});


module.exports = router;