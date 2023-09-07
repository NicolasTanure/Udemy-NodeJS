const EventEmitter = require('events')

class Evento extends EventEmitter {}

const meuEvento = new Evento()

meuEvento.on('segurança', (x,y)=>{
    console.log(`O evento 'segurança' foi disparado com os valores ${x} e ${y}`)
})

meuEvento.emit('segurança', 'userAdmin', 'Alterou Salário')