//config
    //Template Engine
        app.engine('handlerbars',handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Conexão com o banco de dados Mysql
        const sequelize = new sequelize('test','root','123456',{
            host:"localhost",
            dialect:'mysql'
        })
    //Rotas

        app.post('/add',function(req,res){
            res.render('formulario')
        })

        app.listen(8081, function(){
            console.log("Servidor rodando na url");

        });
