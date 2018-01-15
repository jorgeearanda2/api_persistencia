const request = require('supertest');
const app = require('../app');
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
describe ('GET/users',function(){
    it("Should return all the users",async function (){
        let res = await request(app).get('/users')
        assert.equal(res.status,200);
            
    })
})

describe ('POST/users',function(){
    it("Should create an user and add it to the DB",async function(){
        var user = {name: "Pepe" , dni: "455044038A"}
        let res  = await request(app).post('/users').send(user);
        const t = typeof(user);
        assert.equal(res.status,200);
        assert.typeOf(res,t);
        assert.equal(res.body.name,user.name);
        assert.equal(res.body.dni,user.dni);
    })
})
describe ('GET/users/name',function(){
    it("Should return the user with that name",async function (){
        let res = await request(app).get('/users/juan')
            assert.equal(res.status,200)
            assert.equal(res.body.name,'juan' );
    })
})