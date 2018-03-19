let user = require('./User');
console.log(`userName:${user.userName}`);
console.log(`say${user.sayHello()}`);

let http=require('http');
let url = require('url');
let util=require('util');
let server=http.createServer((req,res)=>{
	res.statusCode=200;
	res.setHeader("Content-Type","text/plain;charset=utf-8");
	console.log(req.url);//req.url//
	console.log(url.parse(req.url));//object
	//util.inspect(转字符串)
	res.end(util.inspect(url.parse(req.url)));

}).listen(3000,'127.0.0.1',()=>{
	console.log("服务器已经运行,请输入：http://127.0.0.1:3000/")
})