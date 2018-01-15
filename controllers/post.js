module.exports = function injectRoute(models){
    const post = {
        path : '/users',
        method : 'post',
        controller : async function controller(req,res){
            var person= new models.person({"name": req.body.name,"dni" : req.body.dni});
            models.person.saveUser(person);
            res.send(person);
        }
    }
    return post;
}