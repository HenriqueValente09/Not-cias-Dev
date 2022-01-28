const Sequelize = require('sequelize').Sequelize;
const sequelize = new Sequelize('devnews', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

sequelize.authenticate().then(function () {
    console.log('Conectado com sucesso!');
}).catch(function (err) {
    console.log('Falha na conexão!' + err);
})

module.exports = sequelize