function soma(x, callback) {
    setTimeout(() => {
      callback(x + 5000);
    }, 5000);
  }
  
  soma(200, (resultado) => {
    console.log(resultado);
  });