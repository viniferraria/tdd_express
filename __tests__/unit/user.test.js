const { User } = require('../../src/app/models');
const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate');

describe( 'User', () => beforeEach(async () => await truncate()) );

it('should encrypt user password', async () => {
    beforeEach(async() => await truncate());

    const user = await User.create({
        name: 'viniteste1',
        email: 'viniteste@teste.com',
        password: '123456'
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);
    expect(compareHash).toBe(true);
})