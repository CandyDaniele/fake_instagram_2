const { sequelize, Post } = require('../models');

Post.findAll({include:'comentarios'}).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)