module.exports = function injectRoute(models){
    const findAll = {
        path : '/users',
        method : 'get',
        controller : async function controller(req,res){
            let filter = req.query.filter;
            const users = await models.person.findAll(filter);
            return res.json(users);
        }
    }
    return findAll;
}