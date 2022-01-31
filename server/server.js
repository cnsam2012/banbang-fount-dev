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
	
	if(req.url === '/notiList'){
		res.end(JSON.stringify(notiList.data))
	}
});

server.listen(3000, () => {
    console.log("server is running!")
})