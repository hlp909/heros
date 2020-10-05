/**
 * 此文件是控制器模块，是用来书写业务逻辑的
 * 比如：
 *     1. 使用数据来渲染页面并响应给浏览器
 *     2. 接收浏览器端的数据进行后续处理 比如接收id来查询数据或删除数据
 *     3. 直接响应真正的数据
 */
// 引入model模块
// let heroModel = require('./heroModel')
// let moment = require('moment')
let heroModel = require('./heroModel')
let moment = require('moment')

 module.exports = {
   // 显示主页面
   showIndexPage(req,res){
    res.render('index',{})
   },
   // 显示添加英雄的页面
   showAddHeroPage(req,res){
    res.render('add',{})
   },
   // 获取所有的英雄数据
   getAllHerosData(req,res){
     // 再次调用model模块中的方法来查询所有的英雄数据
     heroModel.getAllHerosData((err,result)=>{
      // 1. 判断err的内容
      if(err) return res.json({
        "code":201,
        "des":"查询数据失败"
      })
      // 服务器端最好是返回给浏览器端对象的这种形式
      // 要包括状态码  状态描述  或者还有数据
      res.json({
        "code":200,
        "des":"查询英雄数据成功",
        "data":result
      })
     })
   },
   // 显示info个人英雄数据
   showInfoPage(req,res){
    // 1. 获取浏览器端传递过来的id
    // console.log(req.query);// 在服务器端可以直接使用req.query来接收浏览器端get方式传递过来的参数，并且已经转换成了对象  expresss框架做的这些事
    // let id = req.query.id
    let {id} = req.query
    // 2. 调用model中的方法来根据id读取数据
    heroModel.getHeroInfoById(id,(err,result)=>{
      if(err) return res.render('404')

      // 3. 将数据渲染在页面上，然后响应给浏览器
      // res.render('info',result[0])
      res.render('info',...result)
    })
    
   },
   // 添加英雄
   addHero(req,res){
     // 1. 接收传递过来的数据
    //  req.on('data')
    //  req.on('end')
    console.log(req.body);
    let hero = req.body
    hero.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
     // 2. 调用model模块中的方法来实现数据的添加
     heroModel.addHero(hero,result=>{
       if(!result) return res.json({
         "code":201,
         "msg":"添加英雄失败"
       })

       res.json({
         "code":200,
         "msg":"添加英雄成功"
       })
     })
    }
 }