const { Router } = require('express');
const { getList, postText, getFirstLook } = require('../controller/llama-controller');

const router = Router();

// Crear un nuevo usuario
router.get( '/list', [
], getList );

router.get( '/initialText', [
], getFirstLook );

// Login de usuario
router.post( '/textIa', [
], postText );

module.exports = router;