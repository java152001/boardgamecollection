const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require ('../utils/middleware').isAuthenticated;

router.get('/', isAuthenticated, function(req, res) {
    db.Collection.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.get('/:id', isAuthenticated, function(req, res) {
    db.Collection.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.post('/', isAuthenticated, function(req, res) {
    db.Collection.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.put('/:id', isAuthenticated, function(req, res) {
    db.Collection.update(req.body, { where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.delete('/:id', isAuthenticated, function(req, res) {
    db.Collection.destroy({ where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});