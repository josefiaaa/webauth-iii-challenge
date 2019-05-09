const express = require('express');
const Users = require('./user-model');
const router = express.Router();
const protected = require('../auth/protected_middleware');

router.get('/', protected, (req, res) => {
    Users.find()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => res.send(err));
});

module.exports = router;