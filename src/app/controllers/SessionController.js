class SessionController {
    async store(req, res) {
        const user = await user.findOne({ where: { email } })

        if(!user) {
            res.status(401).json({ message: 'User not found' })
        }

        if(!(await user.checkPassword(password))) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        return res.json(200).send();
    }
}

module.exports = new SessionController;
