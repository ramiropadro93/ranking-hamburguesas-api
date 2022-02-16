
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { burgersGet,
        burgersPost} = require('../controllers/burgers-controller');

const router = Router();

router.get('/', burgersGet );

router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('name', 'Name must be string').isString(),
    check('bar_name', 'Name of bar is required').not().isEmpty(),
    check('bar_name', 'Name of bar must be string').isString(),
    check('score', 'Score must be a number').isNumeric(),
    check('price', 'Price must be a number').isNumeric(),
    validarCampos
], burgersPost );

module.exports = router;