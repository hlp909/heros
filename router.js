// 1.先引入express框架
const express=require('express')
// 引入控制器模块
let herosCtr=require('./heroCtrl')

// 2.创建路由实例
let router=express.Router();

// 3.写路由匹配
router.get('/',(req,res)=>{
  // res.render('index',{})
  herosCtr.showIndexPage(req,res)
})
.get('/getAllHerosData',(req,res)=>{
  herosCtr.getAllHerosData(req,res)
})
.get('/info',(req,res)=>{
  herosCtr.showInfoPage(req,res)
})
.get('/addHero',(req,res)=>{
  herosCtr.showAddHeroPage(req,res)
})
.post('/addHero',(req,res)=>{
  herosCtr.addHero(req.res)
})
// 4.向外导出路由
module.exports=router;
