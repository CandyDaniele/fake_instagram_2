const { sequelize, Comentario } = require('../models');

Comentario.findAll({include:'post'}).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)