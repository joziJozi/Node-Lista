const express = require('express')
const router = express.Router()

const introducao = require('./introducao')
const lista1 = require('./Lista1')
const lista2 = require('./Lista2')
const lista3 = require('./Lista3')
const lista4 = require('./Lista4')

router.use('/', introducao)
router.use('/Lista1', lista1)
router.use('/Lista2', lista2)
router.use('/Lista3', lista3)
router.use('/Lista4', lista4)
module.exports = router