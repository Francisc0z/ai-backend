const { Router } = require('express');
const { getList, postText, getFirstLook } = require('../controller/llama-controller');

const router = Router();

router.get( '/list', [
], getList );

router.get( '/initialText', [
], getFirstLook );

router.post( '/textIa', [
], postText );

module.exports = router;