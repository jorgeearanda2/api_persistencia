const inject = require('./findAllUsers');
const sinon = require('sinon');
var should = require('chai').should();
describe('findAll', function () {
    it('Should return all the users', async function () {
        const models = {
            person: {
                findAll: function () { }
            }
        };
        const findAll = inject(models);
        const req = {
            query: {}
        };
        const res = {

            json: function (x) {return x }
        };
        const person = [{
            name: "Paco",
            dni: "4543234535a"
        },

        {
            name: "Juan",
            dni: "453231223A"
        }
        ]
        const stub = sinon.stub(models.person, 'findAll');
        stub.resolves(person);
        const spy = sinon.spy(res, "json");
        await findAll.controller(req, res);
        spy.calledWith(person).should.be.true;
    })
})