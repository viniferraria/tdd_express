const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');
import truncate from '../utils/truncate';


describe('Authentication', () => {
    beforeEach( async() => await truncate );

    it('should authenticate', async () =>{
        const user = await User.create({
            name: "viniteste",
            email: "teste@teste.teste",
            password: "121231232131231232313"
        });

        console.log(user);

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: user.password
        })

        expect(response.status).toBe(200);
        // expect(user.email).toBe("teste@teste.teste");
    });

    it('should not authenticate', async () =>{
        const user = await User.create({
            name: "viniteste",
            email: "teste@teste.teste",
            password: "121231232131231232313"
        });

        console.log(user);

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: '123456'
        })

        expect(response.status).toBe(401);
        // expect(user.email).toBe("teste@teste.teste");
    });

    it('should return jwt token when authneticated', async () => {
        const user = await User.create({
            name: "viniteste",
            email: "teste@teste.teste",
            password: "121231232131231232313"
        });

        console.log(user);

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: user.password
        })

        expect(response.body).toHaveProperty('token');
    });
})

