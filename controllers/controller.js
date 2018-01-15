module.exports = function injectToController(models){
    const routes = [];
    const getByName = require ('./findUserByName');
    const findAll = require ('./findAllUsers');
    const post = require ('./post');
    const deleteAll = require ('./deleteAllUsers')
    const deleteOne = require ('./deleteOne');
    routes.push(findAll(models));
    routes.push(post(models));
    routes.push(getByName(models));
    routes.push(deleteAll(models));
    routes.push(deleteOne(models));
    return routes;
}