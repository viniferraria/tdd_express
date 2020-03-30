const { User } = require('../../src/app/models');

describe('Authentication', () => {
    it('should authenticate', async () =>{
        const user = await User.create({
            name: "viniteste",
            email: "teste@teste.teste",
            password_hash: "121231232131231232313"
        });

        console.log(user);

        expect(user.email).toBe("teste@teste.teste");
    });


})

