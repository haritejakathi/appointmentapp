const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = async (req, res) => {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const user = await User.create({ username, password: hashedPassword });
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.signin = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) {
        return res.status(400).send('Username or password is wrong');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        return res.status(400).send('Invalid password');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.header('Authorization', `Bearer ${token}`).send(token);
};
