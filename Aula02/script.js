//objetos Javascript
//objeto JSON (JAvaScript Object Notation)
//Uma calcauladora realiza as operaçoes de soma e subtração
// const calculadora = {
//     soma : function(a, b){
//         return a + b
//     },
//     subtracao : (a, b) => a + b
//     }

//     console.log(calculadora.soma(2, 3))
//     console.log(calculadora.subtracao(5, 4))





//Uma concessionaria tem CNPJ e endereço. Endereco tem rua, bairro e numero uma colecao de veiculos, Cada veiuculo tem marca, modelo, ano de fabricacao 
// let concessionaria = {
//     CNPJ: "12.345.678/0001-90",
//     endereco: {
//         rua: "Rua A",
//         bairro: "Centro",
//         numero: 100
//     },
//         veiculos: [{marca: "Fiat", modelo: "Uno", ano: 2020}]
//     }
// console.log("CNPJ: " + concessionaria.CNPJ)
// console.log("Rua: " + concessionaria.endereco.rua)
// console.log("Bairro: " + concessionaria.endereco.bairro)
// console.log("Número: " + concessionaria.endereco.numero)        
// console.log("Marca: " + concessionaria.veiculos[0].marca)
// console.log("Modelo: " + concessionaria.veiculos[0].modelo)
// console.log("Ano: " + concessionaria.veiculos[0].ano)







//uma pessoa que se chama Maria, tem 21 anos e mora na rua b, numero 20
// let pessoa = {
//     nome: "Maria",
//     idade: 21,
//     endereco: {
//         rua: "Rua B",
//         numero: 20
//     }
// }
// console.log("nome: " + pessoa.nome)
// console.log("idade: " + pessoa.idade)
// console.log("rua: " + pessoa.endereco.rua)
// console.log("numero: " + pessoa.endereco.numero)

//Uma pessoa e se chama joao e tem 17 anos
// let pessoa = {
//     nome: "João",//par chave valor separado por , para outra chave valor
//     idade: 17 //par chave valor 
// }//colecao de par chave valor  
// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa["idade"])


// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont++)
//     }
//     cont ++
//     function f2(){
//         console.log(cont)
//     }
//     cont ++
//     return {f1, f2}
//     //cont++
// }
// let res = eAgora()
// res.f1()
// res.f2()






//closure-fechamento --recurso poderoso!!
// function saudadoesFactory(saudacao, nome){
//     return function(){
//         return saudacao + ", " + nome
//     }
// }
// const olaJoao = saudadoesFactory("Olá", "Joao")
// const tchauJoao = saudadoesFactory("Tchau", "Joao")
// console.log(olaJoao())
// console.log(tchauJoao())
// function ola(){
//     let nome = "Joao"
//     return function(){
//         console.log('Olá, ' + nome)
//     }
// }
// let olaResult = ola()
// olaResult()

// function f(){//escopo interno e externo//serve para verificar o nome das coisas
//     let nome = 'Joao'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f ()
// let umaFuncao = function(){
//     console.log("Fui armazenado em uma variável")
// }
// umaFuncao()

// function f(funcao){
//     funcao()
// }

// function g(){
//    function outraFuncao(){
//     console.log("Fui criado por g")
//    } 
//    return outraFuncao
// }

// f(function(){
//     console.log("Estou sendo passada para f")
// })

// const gResult = g()
// gResult()
// // ou g ()() --> chamada de função
// f(g())//produz a funcao mas nao chama

//função arrow function
//() => {} - arrow functrion - objeto
// const hello = () => {console.log('Oi')}    
// hello()
// const dobro = (n) => 2 * n
// console.log(dobro(2))
// const ehPar = (n) => {
//     return n % 2 === 0
// }
// console.log(ehPar(5))
//const echo = n> n
//console.log(echo(5))
// const dobro = function (n){
//     return 2 * n
// }
// console.log(dobro(2))
// const triplo = function(n = 5){
//     return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))


//funções -  existe em js duas funçoes para serem declaradas a regular e a arrow functions
// function soma(a, b){
//     return a + b
// }
// const res = soma(2, 3)
// console.log(res)
//função regular
// function hello(){
//     console.log('Oi')
// }
// //função regular
// function hello(nome){//hello esta como um ponteiro, sendo redefinido pontadnndo para nome
//     console.log("Oi, " + nome) 
// }
// hello("Ana")//chama por conta da primeira passagem 
// //vetores (bem como o arraylist do java)
// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]
// //filter
// const apenasComA = nomes.filter((n) => {return n.startsWith("A")})      
// //map
// const iniciais = nomes.map((n) => {return n.charAt(0)})
// console.log(iniciais)
// //reduce
// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => {return ac + v})
// console.log(soma)  
// //every
// const todosComecamComA = nomes.every((n) => {return n.startsWith("A")})
// console.log(todosComecamComA)                                                                           
// // v1 = []
// v1 [0] = 3.4
// v1 [10] = 2
// v1 [2] = "abc"
// v1 [102] = 1
// console.log(v1.length)

// v2 = [2, "abc", true]
// console.log(v2)
// for(let i = 0; i < v2.length; i++){
//     console.log(v2[i])
// }

// //const n1 = 2
// const n2 = "3"//string
// //coerção implicita - quando vc nao escreve explicitamente no cód o que deja que aconteça, o funcionamento é implicito, ele simplismente acontece
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita - quando eu pego uma string e forço ela a ser um numero assim somando os valores 
// const n4 = n1 + Number(n2)
// console.log(n4)

//console.log('Oi, ' + nome)
//if(idade >= 18){
//    let nome = "João"
//    console.log("Parabéns, " + nome + ". Você pode dirigir")
//}
//console.log("Até mais, " + nome)

//var linguagem = "Javascript"
//console.log("Aprendendo " + linguagem)
//var linguagem = "Java"
//console.log("Aprendendo " + linguagem)
//linguagem


// var nome = 'José'
// console.log(nome)
// nome = "João"
// console.log(nome)

// let nome = "Ana"
// console.log(nome)
// nome = "Ana Maria"
// console.log(nome)


// const nome = 'José'
// console.log(nome)
// nome = 'João'

//começando...
//const, let, var
// a = 2
// console.log(typeof(a))
// a = "abc"
// console.log(typeof(a))
// a.falar()


// int a = 2;
// a = "abc";