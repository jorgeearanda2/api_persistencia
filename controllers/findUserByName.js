module.exports = function injectRoute(models){
    const getById = {
        path : '/users/:name',
        method : 'get',
        controller : async function controller (req,res){
            var name = req.params.name;
            var person = await models.person.findByName(name);
            res.json(person);
        }
    }
    return getById;
}


