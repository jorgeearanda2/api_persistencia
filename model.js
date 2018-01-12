function connectToDB(){
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/test', {useMongoClient:true});
    mongoose.Promise = require('bluebird');
    return mongoose;
}

module.exports = function getModels() {
    var mongoose = connectToDB();
    const models = {};
    models.person =mongoose.model('Person', new mongoose.Schema({
        name : {type: String},
        dni : {type:String}
        

    }));
    models.person.findAll = async function(){
        return models.person.find({},function(err,users){
            return users;
        }
        )};
    models.person.saveUser = async function(user){
        user.save();
    }
    models.person.findByName = async function(name){
        return models.person.findOne({"name" : name});
    }
        
    
    return models

}