const { Usuario, Post, Comentario } = require('../models');
//const Usuario = require('../models/Usuario');   é igual o de cima
const bcrypt = require('bcrypt');

const AuthController = {
    
    showLogin: (req,res) => {
        //req.query.error    pra tratar o error = 1
        res.render('auth/login');
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    showHome: async (req,res) => {
        //console.log(req.session.usuario);
        // Carregar posts com comentarios
        var posts = await Post.findAll({
                include:[
                    {
                        model: Comentario,
                        as: 'comentarios',
                        include: 'usuario'
                    },
                    'usuario'
                ]})
        res.render('index', {posts});
    },

    login: async (req, res) => {
        //res.send(req.body);

        //lendo as informações do body
        const { email, senha } = req.body;

        //tentar carregar um usuario
        const user = await Usuario.findOne({ where: { email } });
        //const user = await Usuario.findOne({ where: { email: email}}   igual o de cima
        //console.log(user);
        //res.send(user);

        //verifica se existe usuario com o email passado
        if(!user){
            res.redirect('/login?error=1');   //redirect sempre manda pro get

        }

        //validar a senha passada via post contra a guardada no banco
        if (!bcrypt.compareSync(senha, user.senha)){
            res.redirect('/login?error=1');
        }

        //setar uma session com o usuário
        req.session.usuario = user;
        
        //redirecionar (redirecionar sempre get) o usuário para a rota '/home'
        res.redirect("/home");
    }


}

module.exports = AuthController;