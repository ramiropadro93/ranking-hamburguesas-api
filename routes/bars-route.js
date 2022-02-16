
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { barsGet,
        barsPost} = require('../controllers/bars-controller');

const router = Router();

router.get('/', barsGet );

router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('name', 'Name must be string').isString(),
    check('address', 'Adress is required').not().isEmpty(),
    check('address', 'Adress must be string').isString(),
    check('score', 'Score must be a number').isNumeric(),
    validarCampos
], barsPost );

module.exports = router;