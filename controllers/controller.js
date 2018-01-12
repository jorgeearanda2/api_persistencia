module.exports = function injectToController(models){
    const routes = [];
    const findAll = {
        path : '/users',
        method : 'get',
        controller : async function controller(req,res){
            const users = await models.person.findAll();
            res.send(users);
        }
    }

    const post = {
        path : '/users',
        method : 'post',
        controller : async function controller(req,res){
            var person= new models.person({"name": req.body.name,"dni" : req.body.dni});
            models.person.saveUser(person);
            res.send(person);
        }
    }
    const getById = {
        path : '/users/:name',
        method : 'get',
        controller : async function controller (req,res){
            var name = req.params.name;
            var person = await models.person.findByName(name);
            res.json(person);
        }
    }
    routes.push(findAll);
    routes.push(post);
    routes.push(getById);
    return routes;
}