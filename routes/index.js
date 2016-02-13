var express = require('express');
var router = express.Router();

var qr=require('qr-image');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '二维码生成程序' });
});

/* GET qr-code image*/
router.get('/create_qrcode',function(req,res,next){
	var txt=req.query.text;
	try{
		var img=qr.image(txt,{size:10});
		res.writeHead(200,{'Content-Type':'image/png'});
		img.pipe(res);
	}catch(e){
		res.writeHead(414,{'Content-Type':'text/html'});
		res.end('<h1>414 Request-URI Too Large</h1>');
	}
});

module.exports = router;
