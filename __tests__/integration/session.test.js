const request = require('supertest');

const app = require('../../src/app');
const truncate = require('../utils/truncate');
const factory = require('../factories');


describe('Authentication', () => {
    beforeEach(async() => await truncate());

    it('should authenticate', async () =>{
        const user = await factory.create('User', {
            password: "123123"
        })

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: "123123"
        })

        expect(response.status).toBe(200);
        // expect(user.email).toBe("teste@teste.teste");
    });

    it('should not authenticate', async () =>{
        const user = await factory.create('User', {
            password: "123123"
        })

        console.log(user);

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: "121"
        })

        expect(response.status).toBe(401);
        // expect(user.email).toBe("teste@teste.teste");
    });

    it('should return jwt token when authenticated', async () => {
        const user = await factory.create('User', {
            password: "123123"
        })

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: "123123"
        })

        expect(response.body).toHaveProperty('token');
    });

    it('should be able to access private routes when authenticated', async() => {
        const user = await factory.create('User', {
            password: "123123"
        })

        const response = await request(app)
        .get('/dashboard')
        .set('Authorization', `Bearer ${user.generateToken()}`);

        expect(response.status).toBe(200);
    });

    it('should not be able to access private routes without jwt token', async() => {
        const response = await request(app).get('/dashboard');
        expect(response.status).toBe(401);
    });

    it('should not be able to access private routes withou valid jwt', async() => {
        const response = await request(app)
        .get('/dashboard')
        .set('Authorization', `Bearer 1231322`);

        expect(response.status).toBe(401);
    })
})

