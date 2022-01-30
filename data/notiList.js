let data = {
	// 注意：这里的数据更新需重启node服务 --- 终端 Ctrl+C后，再次执行 node --inspect  server.js
	"allNoti": [{
			no: 10000,
			title: 'Normal',
			content: '一般通知1，内容在这里呈现，内容在这里呈现',
			date: "1984-01-01",
			time: "20:15",
			level: 1
		},
		{
			no: 10001,
			title: 'Special',
			content: '特别通知，内容在这里呈现，内容在这里呈现，内容在这里呈现，内容在这里呈现，我很长，我很长，我很长，我很长，我很长，我很长，我很长，我很长，我很长，我很长，我很长，我很长',
			date: "1984-01-01",
			time: "20:15",
			level: 2
		},
		{
			no: 10002,
			title: 'Emergency',
			content: '紧急通知，内容在这里呈现，内容在这里呈现',
			date: "1984-01-01",
			time: "20:15",
			level: 3
		},
		{
			no: 10003,
			title: 'upLoad',
			content: '文件资料收集，内容在这里呈现，内容在这里呈现',
			date: "1984-01-01",
			time: "20:15",
			level: 0
		},
		{
			no: 10004,
			title: 'Normal -2',
			content: '一般通知2，内容在这里呈现，内容在这里呈现',
			date: "1984-01-01",
			time: "20:15",
			level: 1
		},
		{
			no: 10005,
			title: 'Readed',
			content: '已读通知，内容在这里呈现，内容在这里呈现',
			date: "1984-01-01",
			time: "20:15",
			level: -1
		},
		{
			no: 10006,
			title: 'Readed -2',
			content: '已读通知2，内容在这里呈现，内容在这里呈现',
			date: "1984-01-01",
			time: "20:15",
			level: -1
		},
		{
			no: 10007,
			title: 'Normal -3',
			content: '一般通知3，它插在两个已读通知中间，内容在这里呈现，内容在这里呈现，内容在这里呈现，内容在这里呈现，内容在这里呈现',
			date: "1984-01-01",
			time: "20:15",
			level: 1
		},
		{
			no: 10008,
			title: 'Readed -3',
			content: '已读通知3，内容在这里呈现，内容在这里呈现',
			date: "1984-01-01",
			time: "20:15",
			level: -1
		}
	],
	"unreadNoti": [
		
	],
	"readNoti": [
		
	]
}
module.exports = {
	data: data
}
