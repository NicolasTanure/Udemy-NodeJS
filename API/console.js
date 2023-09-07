console.log('toma dos guri passou')

//erro

console.error(new Error('exibindo mensagem de erro'))

const carros = ['GM','Fiat','FORD','RENAULT']

console.table(carros)

const dados = {name:'glauco', empresaNumero:5}

console.table(dados)

console.time('contador')
for(let index = 0; index < 100; index++){
    console.log('-')
}
console.timeEnd('contador')
console.count('-')
console.count('-')
