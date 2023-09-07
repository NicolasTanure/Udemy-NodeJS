function execute(){
    executeTO()
}

function executeTo(){
    throw new Error('ah nao deu erro, na minha maquina funciona')
}

function init(){
try{
 execute()   
}catch(error){
    console.log('temos um problema' + error.message)
}
}

init()

console.log('depois do erro')