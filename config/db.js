/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-07-26 09:29:10
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-07-26 09:37:14
 * @FilePath: \pms-pcd:\studio\node-server\server-mongodb-base\config\db.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    development: {
        databases: {
            database: 'ai_assist', // 数据库名称
            host: 'localhost',
            port: 27017,
            dialect: 'mongodb',
        }
    },
}
