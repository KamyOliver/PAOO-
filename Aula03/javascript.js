//encontrando solucao para o cod callbackhell
// 1+ 2 + 3 .... + (n-2) + (n-1) + n
//um forma para fazer um calculo sem demorar 
//exercicio: se n for negativo, devolver uma promise rejected, associada ao texto "apenas numeros positivos"
//caso contrario, devolver essa promisse que ja é devolvida no momento 
// const calculoRapidinho = (n) => {
//     if(n < 0){
//         return Promise.reject("apenas numeros positivos")
//     }
//     return Promise.withResolvers((n/2) * (n + 1))
// }

// //tratar ambos os casos usando then ou catch
// // Exemplo com número positivo (cai no .then)
// calculoRapidinho(4)
//   .then((resultado) => {
//     console.log("Sucesso:", resultado);
//   })
//   .catch((erro) => {
//     console.error("Erro:", erro);
//   });

// // Exemplo com número negativo (cai no .catch)
// calculoRapidinho(-5)
//   .then((resultado) => {
//     console.log("Sucesso:", resultado);
//   })
//   .catch((erro) => {
//     console.error("Erro:", erro); // Imprime: "Erro: apenas numeros positivos"
//   });



// calculoRapidinho(100).then((res) => {
//      console.log(res) 
//     })
// console.log('Terminando script principal...')//entra em execucao
// function calculoDemorado(n){
//     return new Promise(function(resolve, reject){
//         // lógica do cálculo demorado
//         //cod com potenciaol de demorar 
//         let res = 0
//         for(let i = 1; i <= n; i++){
//             res += i
//         }
//         resolve(res)
//     })
// }
//construcao then/catch
//calculoDemorado(100).then((resultado) => {console.log(resultado)})//chamada da funcao que retorna uma promise

// ou chamar assim 
// const auxiliar = calculoDemorado(100)
// auxiliar.then(function(res){
//     console.log(res)
// })

//CPU-bound: dominada por cálculo (um loop que soma de 1 a 100)
//IO-bound: domina por operacoes de entrada e saida (acesso a arquios, requericoes HTTP)
// Callback hell -> 
// const fs = require('fs')//modulo de arquivos do node
// console.log("A")
// const abrirArquivo = function(nomeArquivo){
//     //definir uma funcao callback
//     const exibirConteudo = function(erro, conteudo){
//        if(erro){ 
//         console.log(`Deu erro: ${erro}`)
//        } else {
//         console.log(conteudo.toString())
//         const dobro= +conteudo.toString() * 2
//         const finalizar = function(erro){
//             if(erro){
//                 console.log('Erro ao salvar o dobro')
//             } else {
//                 console.log('Salvou o dobro ok')
//             }
//         }

//         fs.write('dobro.txt', dobro.toString(), finalizar)//callback"finalizar"
//        }
//        console.log("D")
//     }
//     //chamar a funcao d leitura do arquivo do modulo fs, 
//     //entregando a callback como parametro
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log("C")
// }
// abrirArquivo('arquivo.txt')
// console.log("B")






// const idade = 18 
// //minha idade é 18 
// //concatenação de string com variavel
// console.log('Minha idade é ' + idade)//concatenação de string com variavel

// //interpolacao
// console.log(`Minha idade é ${idade}`)//interpolacao





// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000// representa agora com 2 seg a diante 
//     // e pq fez isso ? vamos ter um loop da data atual representando como um numero
//     while(new Date().getTime() <= atualMais2Segundos);
//     // enquanto a data atual for menor que a data atua
//     // vai demorar 2 seg para executar
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9 
// //const d = demorada()
// setTimeout(() => {
//     const d = demorada()
//     console.log(`d: ${d}`)//processamento nao demorante
// }, 500)//entregar dois parametros function e numero (quantidade em mili segundos)
// const e = 2 + a + b
// console.log(`e: ${e}`)//sera executado primeiro a linha u e dps a 2 para assim executar a 3
//ideia [e nao esperar a demorada] e depois executar a 3
//pula direto e exuta o console.log(`e: ${e}`) e depois executa a demorada

// const a = 2 + 7
// const b = 5
// console.log(a + b)//sera executado primeiro a linha u e dps a 2 para assim executar a 3





// console.log('Eu primeiro...')//entra em execucao 
// console.log('Agora eu')
// console.log('Sempre vou ser a ultima...')
