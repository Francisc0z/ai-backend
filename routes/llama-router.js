const { Router } = require('express');
const { check } = require('express-validator');
const { getList, postText, revalidarToken } = require('../controller/llama-controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

// Crear un nuevo usuario
router.get( '/list', [
    //check('prompt', 'El nombre es obligatorio').not().isEmpty(),
    //validarCampos
], getList );

// Login de usuario
router.post( '/textIa', [
    // check('email', 'El email es obligatorio').isEmail(),
    // check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
    // validarCampos
], postText );

// Validar y revalidar token
// router.get( '/renew', validarJWT , revalidarToken );







module.exports = router;