const { response, request } = require('express');
const Bar = require('../models/bars-model');

const barsGet = async(req = request, res = response) => {

    res.json({
    });
}

const barsPost = async(req, res = response) => {
    const bar = new Bar(req.body);

    // Guardar en BD
    await bar.save();

    res.json({
        msg: req.body
    });
}

module.exports = {
    barsGet,
    barsPost
}