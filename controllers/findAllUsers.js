module.exports = function injectRoute(models){
    const findAll = {
        path : '/users',
        method : 'get',
        controller : async function controller(req,res){
            const users = await models.person.findAll();
            res.send(users);
        }
    }
    return findAll;
}