const VerificaUsuarioLogado = (req, res, next)=>{
    //Se session do usuário não estiver setada, redireciona para login
    if(!req.session.usuario){
        res.redirect("/login?error=2");
    }

    //Se chegou até aqui, a session esta ok... go ahead!
    next();
}

module.exports = VerificaUsuarioLogado;