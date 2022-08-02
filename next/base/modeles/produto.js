 import listaproduto from "./data/listaproduto"
 export default class produto {
    #id 
    #nome
    #preco
    constructor(id,nome,preco){
            this.#id=id
            this.#nome=nome
            this.#preco= preco

    }
    get preco(){
    return preco

}
get nome(){
    return nome
}
get id(){
    return id
}
}