module.exports = function injectRoutes(app,model){
    const injectToController = require ('./controller.js');
    routes = injectToController(model);
    routes.forEach(function(elem){
        app[elem.method](elem.path,elem.controller);
    })
}