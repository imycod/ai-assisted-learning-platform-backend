/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-07-26 09:29:10
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-07-26 09:57:55
 * @FilePath: \pms-pcd:\studio\node-server\server-mongodb-base\models.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mongodb = require('mongodb');
const db = require('./config/db.js')
const { database, host, port, dialect } = db.development.databases
const MongoClient = mongodb.MongoClient;

module.exports = async (app) => {
    try {
        const client = await MongoClient.connect(`${dialect}://${host}:${port}`, { useUnifiedTopology: true });

        const db = client.db(database);

        // 在此处可以执行数据库操作，或将数据库实例传递给你的路由和中间件
        // 例如：将数据库实例作为本地变量传递给路由
        app.locals.db = db;
        app.locals.client = client;
        
    } catch (error) {
        if (err) {
            console.error('Failed to connect to MongoDB:', error);
            return;
        }

        console.log('Connected to MongoDB successfully!');
    }
}

