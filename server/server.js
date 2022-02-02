// 安装node后，在当前目录（/server）下使用终端执行下句
// node --inspect  server.js

const http = require("http");
const notiList = require("../data/notiList");

const server = http.createServer((req, res) => {
    //解决跨域问题
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.writeHead(200, {
    'Content-Type': 'application/json'
    });
	
	if(req.url === '/'){
		res.end(JSON.stringify({"空":0,"null":1,"ヌル":2}))
	}
	if(req.url === '/notiList'){
		res.end(JSON.stringify(notiList.data))
	}
	if(req.url === '/notiList/all'){
		res.end(JSON.stringify(notiList.data.allNoti))
	}
	if(req.url === '/notiList/read'){
		res.end(JSON.stringify(notiList.data.readNoti))
	}
	if(req.url === '/notiList/unread'){
		res.end(JSON.stringify(notiList.data.unreadNoti))
	}
	if(req.url === '/notiList/star'){
		res.end(JSON.stringify(notiList.data.starNoti))
	}
});

server.listen(3000, () => {
    console.log("server is running!")
})