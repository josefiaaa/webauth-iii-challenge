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

module.exports = router;