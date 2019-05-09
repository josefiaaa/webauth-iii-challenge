const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/user-model');
const secrets = require('../config/secrets');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;

    Users.add(user)
         .then(saved_user => {
             res.status(201).json(saved_user)
        })
         .catch(err => {
             res.status(500).json(err)
         })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    Users.findBy({ username })
         .first()
         .then(user => {
             if(user && bcrypt.compareSync(password, user.password)) {
                 const token = generateToken(user);
                 res.status(200).json({
                     message: `Welcome ${user.username}!`,
                     token,
                 })
            } else {
                res.status(401).json({ message: 'Invalid Credentials!' })
            }
         })
         .catch(err => {
             res.status(500).json(err)
         })
})

function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
    };
    const options = {
      expiresIn: '1h',
    };
  
    return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;