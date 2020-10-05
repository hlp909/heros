// 此模块是一个model模块，是用来对数据进行增删查改的
// 1.先引入模块
// let mysql = require('mysql')
const mysql = require('mysql')


// 2.创建连接对象
// let conn = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'root',
//     database: 'qianduan36',
//     dateStrings:true
// })
let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'qianduan36', // 这是数据库的名称，数据库中有很多的数据表
    dateStrings: true // 不要将数据库中读取出来的时间进行转换
})
// 3.连接数据库
// conn.connect()
conn.connect()

// 4.根据sql语句来操作数据库
module.exports = {
    // 查看所有的英雄数据
    getAllHerosData(callback) {
        let sql = 'select * from heros order by id'
        conn.query(sql, (err, result) => {
            if (err) return callback(err)

            callback(null, result)
        })
    },
    //根据id获取单个英雄的数据
    getHeroInfoById(id, callback) {
        let sql = 'select * from heros where id = ?'
        conn.query(sql, [id], (err, result) => {
            if (err) return callback(err)
            // console.log(result);
            callback(null, result)
        })
    },
    //添加个人数据
    addHero(hero, callback) {
        // let {
        //     name,
        //     age,
        //     gender,
        //     phone,
        //     address,
        //     ctime
        // } = hero;
        // let sql = 'insert into heros (name,age,gender,phone,address,ctime) values ("' + name + '",' + age + ',"' + gender + '","' + phone + '","' + address + '","' + ctime + '")';
        // conn.query(sql, (err, result) => {
        //     if (err) return callback(false)
        //     callback(true)
        // })
        let {name,age,gender,phone,address,ctime} = hero
        let sql = 'insert into heros (name,age,gender,phone,address,ctime) values ("'+name+'",'+age+',"'+gender+'","'+phone+'","'+address+'","'+ctime+'")';
        // 2. 调用方法添加数据
        conn.query(sql,(err,result)=>{
          if(err) return callback(false)
    
          callback(true)
        })
    }
}