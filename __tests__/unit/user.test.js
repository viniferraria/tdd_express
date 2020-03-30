import { User } from '../../src/app/models';
import bcrypt from 'bcryptjs';
import truncate from '../utils/truncate';

describe( 'User', () => beforeEach(async () => await truncate()) );

it('should encrypt user password', async () => {

    const user = await User.create({
        name: 'vini',
        email: 'vini@mail.com',
        password: '123456'
    });

    const hash = await bcrypt.hash('123456', 8);
    await bcrypt.compare('123456', user.password);
    
    expect().toBe(true);
})