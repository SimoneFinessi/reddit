export class Post{
    nome:String;
    conte:String;
    vote:number;
    
    constructor(nome:string,conte:string,vote?:number){
        this.nome=nome
        this.conte=conte
        this.vote=vote

    }
    like():void{
        this.vote +=1
    }
    
   

}