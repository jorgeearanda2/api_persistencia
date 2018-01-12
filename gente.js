module.exports = async function(model){
    var juan  = new model.person({"name": "juan", "dni": "555555555A"});
    juan.save();
}