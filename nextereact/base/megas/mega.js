
 
    function mega (qtd=6 ,numeros = {}){
  
  if(qtd<6 && qtd>60){
    throw"impossivel"
  }if (numeros.length=qtd){
    return numeros
  }
const numerosaletorios=parseInt({qtd}*60)+1
  if(numeros(numerosaletorios)
)
  
return mega (qtd,{...numerosaletorios,numeros})
else{
  return mega(qtd,numeros)
}

  }
console.log(mega())
  
