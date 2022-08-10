import react from "react";
interface pessoaprops{
nome:string
idade:number
}
export default function Pessoa (props:any){
return <div>nome:{props.nome},idade:{props.idade}
</div>
}
