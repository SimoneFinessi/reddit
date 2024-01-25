import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array = new Array<string>();
  
    
  
  spam(num:HTMLInputElement,testo:HTMLInputElement): boolean{
    let cont=Number(num.value)
    for(let i:number=0;i<cont; i++){
      this.array.push(testo.value)
    }
    return false;
  }
  
}
