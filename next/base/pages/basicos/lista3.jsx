    

function gerarlista(final=10){
   
    const  lista={}
    for(let i=1; final<=10;i++){
    lista.push(<span>{i},</span>)
}
return  lista;
}

export default function gerarlista(){
    return(
    <div>
    {gerarlista}
    </div>
    )
    
    }




    
