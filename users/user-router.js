const router = require('express').Router();

const Users = require('./user-model');
const protected = require('../auth/protected_middleware');

router.get('/', protected, (req, res) => {
    Users.find()
         .then(users => {
             res.json(users);
        })
         .catch(err => json(err))
});

module.exports = router;