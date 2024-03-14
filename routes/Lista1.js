const express = require('express')
const router = express.Router()

router.post('/ex1', function(req, res){
    
    const {n1, n2, n3, n4} = req.body

    const media = (n1 + n2 + n3 + n4) / 4

    const mensagem = media >= 7 ? 'Aprovado' : 'Reprovado'

    res.json({media, mensagem})
})

router.post('/ex2', function(req, res){

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

    const soma = brancos + nulos + validos
    
    let retorno = {}
    if(soma > total){

        retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: "A soma dos votos não pode passar o total de eleitores" 
        }

        res.status(400).json(retorno)
        
    } else {
        const percBranco = brancos / total * 100
        const percNulos = nulos / total * 100
        const percValidos = validos / total * 100

        retorno = {percBranco, percNulos, percValidos}

        res.status(200).json(retorno)
    }

})

router.post('/ex3', function(req, res){
    
    const salario_Anual = Number(req.body.salario);

        const reajuste = 0.07; 

        const salario_Novo = salario_Anual * (1 + reajuste); 

        retorno = {
            codigo: salario_Novo,
            mensagem: "Novo salario" 
        }

        res.status(200).json(retorno) 
})

router.post('/ex4', function(req, res){

    const custoFabrica = Number(req.body.custoFabrica)
    const custoDistribuidor =  custoFabrica * 28/100
    const custoImposto = custoFabrica * 45/100
    const custoFinal = custoFabrica + custoDistribuidor + custoImposto

    const resposta = {
        CustoFinal: custoFinal}
        
    res.json(resposta)         
})

router.post('/ex5', function(req, res){

    const {custoFabrica, percentualDistribuidor, percentualImposto} = req.body
    const custoDistribuidor =  custoFabrica * Number(percentualDistribuidor/100)
    const custoImposto = custoFabrica * (Number(percentualImposto) /100)
    const custoFinal = custoFabrica + custoDistribuidor + custoImposto

    const resposta = {
        custoFinal: custoFinal}
        
    res.json(resposta) 

})

router.post('/ex6', function(req, res){

    const {totalCarros, valorPorCarro, valorDasVendas, salario} = req.body
    const pagamentoPorCarro = Number(totalCarros) * Number(valorPorCarro)
    const pagamentoPorVenda = (Number(valorDasVendas) * 5 /100)
    const salarioFinal = Number(salario) + pagamentoPorCarro + pagamentoPorVenda

    const resposta = {
        salarioFinal: salarioFinal}
        
    res.json(resposta) 

})

router.post('/ex7', function(req, res){

    const nota1 = Number(req.body.nota1)
    const nota2 = Number(req.body.nota2)

    const soma = (nota1 * 0.4) + (nota2 * 0.6)
    const media = soma / (0.4 + 0.6)

    const resposta = {
        MediaAluno: media
    }
    res.json(resposta)
})

router.post('/ex8', function(req, res){

    const {raio, altura} = req.body
    const pi = 3.14
    const volume = pi * raio ** 2 * altura
    const resposta = {
        Volume: volume }

   res.json(resposta)

})

router.post('/ex9', function(req, res){
    const {n1, n2} = req.body

    const soma = Number(n1) + Number(n2)
    const resultado = soma * n1

    const resposta = {
        Resultado: resultado }

   res.json(resposta)
    
})
module.exports = router