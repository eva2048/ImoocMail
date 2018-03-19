var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var productSchema=new Schema({
	"ProductId":String,
	"ProductName":String,
	"salePrice":Number,
	"productImage":String,
	"checked":String,
	"productNum":String
});

module.exports=mongoose.model('Good',productSchema);
//module.exports=mongoose.model('Good',productSchema,"数据库对应集合名字");