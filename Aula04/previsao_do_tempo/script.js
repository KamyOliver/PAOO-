//exibir todas as previsoes do tempo para Itu usando async/await
// require('dotenv').config()
// const axios = require('axios')

// const appid = process.env.APPID
// const q = 'Itu'
// const units = 'metric'
// const lang = 'pt_br'

// // Ao omitir o parâmetro cnt, a API retorna toda a lista de previsões (até 40 intervalos de 3h)
// const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${appid}&q=${q}&units=${units}&lang=${lang}`

// async function obterPrevisoes() {
//   try {
//     const res = await axios.get(url)
//     const previsoes = res.data.list

//     console.log(`Previsões meteorológicas para ${q}:`)
//     console.log('********************')

//     for (const previsao of previsoes) {
//       console.log(`
//         Data/Hora: ${new Date(+previsao.dt * 1000).toLocaleString()},
//         Mínima: ${previsao.main.temp_min}°C,
//         Máxima: ${previsao.main.temp_max}°C,
//         Humidade: ${previsao.main.humidity}%,
//         Descrição: ${previsao.weather[0].description},
//         Sensação térmica: ${previsao.main.feels_like}°C
//       `)
//     }

//     console.log('********************')

//     // Filtro para sensações térmicas superiores ou iguais a 20°C
//     const filtradas = previsoes.filter(p => p.main.feels_like >= 20)
//     console.log(`Total com sensação térmica >= 20°C: ${filtradas.length}`)

//   } catch (erro) {
//     if (erro.response) {
//       console.error(`Erro ${erro.response.status}: ${erro.response.data.message}`)
//     } else {
//       console.error('Erro na requisição:', erro.message)
//     }
//   }
// }

// obterPrevisoes()








// //require('dotenv').config()
// const axios = require('axios')
// const appid = process.env.APPID
// console.log(appid)
// const q = "Itu"
// const units = "metric"//graus celsius
// const lang = "pt_br"//idioma
// const cnt = 1
// const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${appid}&q=${q}&units=${units}&lang=${lang}&cnt=${cnt}`
// //console.log(url)
// axios.get(url)//promise
// .then(res => {//other promise
//     console.log(res.data)
//     console.log("***********")
//     return res.data.list
// })
// .then((previsoes) => {
//     for (let previsao of previsoes) {
//         console.log(`
//             ${new Date(+(previsao.dt) * 1000).toLocaleString()},
//             Min: ${previsao.main.temp_min}\u00B0C,
//             max: ${previsao.main.temp_max}\u00B0C,
//             Humidade: ${previsao.main.humidity}%,
//             Descricao: ${previsao.weather[0].description},
//             Sensação térmica: ${previsao.main.feels_like}\u00B0C

//         `) 
        
//     }
//     console.log("********************")
//     return  previsoes
// })
// .then((result) => {
//     const lista = result.filter(p => p.main.feels_like >= 20)
//     const total = lista.length
//     console.log(`Total: ${total}`)
// })