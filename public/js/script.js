
console.log("===javascript do front===")

let promise1 = new Promise((resolve, reject) => {
    try {
        let texto = {texto:"deu"}
        resolve(texto)
    }catch (e)  {       
        reject(texto)        
    } 
});



promise1.then(resultado => {
    console.log(resultado.texto)
}).catch((e)=>{
    console.log("Erro ao consumir promise", e)
})