// 入口文件
var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();


// 配置模板引擎
app.set('view engine', 'ejs');
app.set('views', './views');

// 托管静态资源
app.use('/node_modules', express.static('node_modules'));
// 主页
// var indexRouter = require('./router/indexRouter.js');
// app.use(indexRouter);
// 用户
// var userRouter = require('./router/userRouter.js');
// app.use(userRouter);


// app.use(require('./router/indexRouter.js'));

fs.readdir(path.join(__dirname, './router'), (err, filename) => {
    if (err) throw err;
    filename.forEach(filename => {
        var filePath = path.join(__dirname, './router', filename);
        app.use(require(filePath));
    })
})

app.listen(3000, function() {
    console.log('http://127.0.0.1:3000');
});