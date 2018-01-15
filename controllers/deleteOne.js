module.exports = function injectRoute(models){
    const deleteOne = {
        path : '/users/:name',
        method : 'delete',
        controller : async function controller (req,res){
            var name = req.params.name;
            nameToRemove = {"name": name};
            var person = await models.person.deleteOne(nameToRemove);
            res.json(person);
        }
    }
    return deleteOne;
}
