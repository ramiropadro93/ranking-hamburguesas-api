const { response, request } = require('express');
const Beer = require('../models/beers-model');

const beersGet = async(req = request, res = response) => {

    res.json({
    });
}

const beersPost = async(req, res = response) => {
    const beer = new Beer(req.body);

    // Guardar en BD
    await beer.save();

    res.json({
        msg: req.body
    });
}

module.exports = {
    beersGet,
    beersPost
}