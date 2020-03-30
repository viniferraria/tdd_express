const { User } = require('../../src/app/models');
const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate');

describe( 'User', () => beforeEach(async () => await truncate()) );

it('should encrypt user password', async () => {
    beforeEach(async() => await truncate());

    const user = await User.create({
        name: 'vini2312312',
        email: 'vini@mailasdasdsa.com',
        password: '123456'
    });

    const compareHash = await bcrypt.compare(user.password_hash, user.password_hash);
    expect(compareHash).toBe(true);
})