var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var userinfoSchema=new Schema({
	"userId": String,
    "userName": String,
    "department":String,
    "skills": [
        {
            "skillName":String,
            "skillLevel":String,
            "skillPercent":Number
        }
    ]
},{usePushEach: true});

module.exports=mongoose.model('userInfo',userinfoSchema);
//module.exports=mongoose.model('Good',productSchema,"数据库对应集合名字");