var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var productSchema=new Schema({
	"SkillName":String,
	"Levels":[{
		"levelName":String,
		"levelPercent":Number
	}]
});

module.exports=mongoose.model('Skill',productSchema);
//module.exports=mongoose.model('Good',productSchema,"数据库对应集合名字");