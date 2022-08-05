

   function mega(qtd=6,numeros=[]){
  if(qtd>6 && qtd<60){
    throw"impossivel"
  }if(numeros.length ===qtd){
    return numeros
  }
  const numerosaletorios=parseInt(Math.random)*60+1
  if(numeros.includes(numerosaletorios)){
    return mega(qtd,{numeros,numerosaletorios})
  }
}
  console.log(mega())