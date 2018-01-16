function init(){
    const express = require('express');
    const app = express();
    var bodyParser = require ('body-parser');
    app.use(bodyParser.json(),bodyParser.urlencoded({extended:true}));
    const getModels = require('./model');
    const model = getModels();
    const injectRoutes = require('./controllers');

    injectRoutes(app,model);
    
    app.listen(8080);
    
    return app;
}

const app = init();
module.exports = app;
