module.exports = function injectRoute(models){
    const deleteAll = {
        path : '/users/',
        method : 'delete',
        controller : async function controller (req,res){
            var response = await models.person.removeAll();
            res.json(response);
        }
    }
    return deleteAll;
}