function soma(x){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             resolve(x + 5000)
        } ,5000);
    })
    
    
    
    
}

soma(200).then((resultado)=>{
    console.log(resultado);
})