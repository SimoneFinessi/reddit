import { Component } from '@angular/core';
import {Mail} from './mostra/mail.model';
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mail:Mail[];
  constructor(){
    this.mail=[]
  }  
  newMail(to:HTMLInputElement,ogg:HTMLInputElement,corpo:HTMLInputElement):boolean{
    this.mail.push(new Mail(to.value,ogg.value,corpo.value))
    to.value=""
    ogg.value=""
    corpo.value=""
    return false
  }
}
