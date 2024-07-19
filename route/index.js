let user =require('../controller/userController');
module.exports=(app)=>{
    app.get('/list',user.list);
    app.get('/user',user.create);
    app.get('/updateUser',user.update);
    app.get('/remove/:id',user.remove);
}