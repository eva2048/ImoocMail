var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var listSchema=new Schema({
	"levels":Array,
	"skills":Array,
	"departments":Array
});

module.exports=mongoose.model('List',listSchema);
//module.exports=mongoose.model('Good',productSchema,"数据库对应集合名字");