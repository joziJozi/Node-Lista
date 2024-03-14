const express = require('express')
const router = express.Router()

router.post('/ex1', function(req, res){

  const numeros = [1, 20, 17, 9]

  let soma = 0 
  for (let n of numeros){
    soma += n 
    soma = soma + n 
  }

    res.json({soma })

})
module.exports = router