function soma(x){
    return new Promise((resolve,reject)=>{
        if(Number(x)== NaN || Number(x)==undefined || typeof x != "number"){
            reject("ai que burro")
        }
        setTimeout(()=>{
             resolve(x + 5000)
        } ,3000);
    })
    
}

async function main(){
    try{
        const resultado = await soma('20');
        console.log(`resultado com async: ${resultado}`)
    } catch(error){
        console.log("problemas " + error)
        console.log(process.env.USERNAME)
    }
}

main();