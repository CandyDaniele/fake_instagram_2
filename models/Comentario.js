const Comentario = (sequelize, DataTypes) => {
    var comentario = sequelize.define(
        'Comentario',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            texto: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            usuarios_id:  {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                model: "Usuario", 
                key: "id"
                }
            },
            posts_id:  {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                model: "Post", 
                key: "id"
                }
            }
        },{
            tableName: "comentarios",
            timestamps: false
        }

    );

    comentario.associate = (models) => {
        comentario.belongsTo(models.Post, {foreignKey: 'posts_id', as:'post'})
        comentario.belongsTo(models.Usuario, {foreignKey: 'usuarios_id', as:'usuario'})
    }
    return comentario;
}

module.exports = Comentario;