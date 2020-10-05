/**
 * app.js是当前我们项目的一个主入口文件
 */
// 1. 引入模块
// const express = require('express')
const express = require('express')


// let bodyParser = require('body-parser')
let bodyParser = require('body-parser')

// 引入其它模块
// let router = require('./router')  // 后缀.js是可以省略的
let router = require('./router')  // 后缀.js是可以省略的

  
// 2. 创建express实例对象
// let app = express()
let app = express()


// 创建 application/x-www-form-urlencoded 编码解析
// false的目的是不要用bodyParse这个第三方模块内置的解析方式，使用我们原来的解析方式即可
// 当使用app.use注册了这个bodyParse中间件之后,在控制器就可以使用req.body来接收浏览器端post过来的数据
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))

 

// 配置默认的模板引擎
// app.set('view engine','ejs')
app.set('view engine','ejs')


// 托管静态资源
// app.use('/node_modules',express.static('node_modules'))
app.use('/node_modules',express.static('node_modules'))

// 3. 开启服务并监听端口
app.listen(3000,()=>{
  console.log('express server is running at http://127.0.0.1:3000');
})

// 4. 注册中间件 
app.use(router)


