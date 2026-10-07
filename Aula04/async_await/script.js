//promises podem ser tratadas com then/catch e com async/await
//async pode existir sem await
//await precisa de async para existir 
// function fatorial(n){
//     if (n < 0) return Promise.reject("Não existe fatorial de número negativo")
//     let res = 1
//     for (let i = 2; i <= n; i++) res *= i
//         return Promise.resolve(res)
// }
//  function chamadaComThenCatch(){
//     fatorial(5)
//     .then(res => console.log(`Resultado: ${res}`))
//     .catch(err => console.log(`Erro: ${err}`))

//     fatorial(-100)
//     .then(res => console.log(`Resultado: ${res}`))
//     .catch(err => console.log(`Erro: ${err}`))
// }


// async function hello(nome){
//     return `Oi, ${nome}!`//devolve uma promisse 
// }

// const resultado = hello("pedro")
// resultado.then(texto => console.log(texto))//tratando a promisse com then/catch
// console.log("Script principal terminando...")