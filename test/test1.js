const request = require('supertest');
const app = require('../app');
const assert = require('chai').assert;
describe ('GET/users',function(){
    it("Should return all the users",function (done){
        request(app)
            .get('/users')
            .expect(200)
            .end(function(err,res){
                if (err) return done(err)
                done();
            })
    })
})

describe ('POST/users',function(){
    it("Should create an user and add it to the DB",function(done){
        var user = {"name": "Pepe" , "dni": "455044038A"}
        request(app)

            .post('/users')
            .send(user)
            .end(function(err,res){
                const t = typeof(user);
                assert.typeOf(res,t);
                assert.equal(res.body.name,user.name);
                assert.equal(res.body.dni,user.dni);
                if (err) return done(err)
                done();
            })
    })
})




describe ('GET/users/name',function(){
    it("Should return the user with that name",function (done){
        request(app)
            .get('/users/juan')
            .expect(200)
            .expect('Content-type', /json/)
            .expect(function(req,res){
                assert.equal('juan', 'juan');
            })
            .end(function(err,res){
                assert.equal(res.body.name, 'juan')
                if(err) return done(err)
                done();
            })
    })
})