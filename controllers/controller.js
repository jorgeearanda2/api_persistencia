module.exports = function injectToController(models){
    const routes = [];
    const getByName = require ('./findUserByName');
    const findAll = require ('./findAllUsers');
    const post = require ('./post');
    routes.push(findAll(models));
    routes.push(post(models));
    routes.push(getByName(models));
    return routes;
}