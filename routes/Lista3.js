const express = require('express')
const router = express.Router()

router.post('/ex4', function(req, res){

    const {salarioMinimo,
    horasTrabalhadas,
    dependentes,
    horasExtras
    } = req.body

    const valorhorasTrabalhadas = salarioMinimo * 0.2
    const salarioMes = valorhorasTrabalhadas * horasTrabalhadas
    const valordependentes = dependentes * 32
    const valorhorasExtras = valorhorasTrabalhadas * 1.5 * horasExtras
    const salarioBruto = salarioMes + valordependentes + valorhorasExtras

    let imposto = 0

    if(salarioBruto>= 5000){
        imposto = salarioBruto >= 5000 ? salarioBruto * 0.2 : salarioBruto * 0.1
    }
    
    const salarioliquido = salarioBruto - imposto

    const gratificacao = salarioliquido < 3500 ? 1000 : 500
    const salarioReceber = salarioliquido + gratificacao
    res.json({salarioBruto, imposto, gratificacao, salarioReceber})

})
module.exports = router