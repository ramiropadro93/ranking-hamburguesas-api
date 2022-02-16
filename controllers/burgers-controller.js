const { response, request } = require('express');
const Burger = require('../models/burgers-model');

const burgersGet = async(req = request, res = response) => {

    res.json({
    });
}

const burgersPost = async(req, res = response) => {
    const burger = new Burger(req.body);

    // Guardar en BD
    await burger.save();

    res.json({
        msg: req.body
    });
}

module.exports = {
    burgersGet,
    burgersPost
}