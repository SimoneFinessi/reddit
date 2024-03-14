import { Component, Input,HostBinding } from '@angular/core';
import {Mail} from './mail.model';

@Component({
  selector: 'app-mostra',
  templateUrl: './mostra.component.html',
  styleUrls: ['./mostra.component.css']
})
export class MostraComponent {
@HostBinding('class') cssClass='card mt-4 white';
@Input() mostra:Mail
vedere:boolean=false
vede():boolean {
  this.vedere=!this.vedere
  return false
}
special():boolean {
if (this.cssClass=="white"){
  this.cssClass='card mt-4 yellow'

}else{
  
  this.cssClass='card mt-4 white  '
}
  return false
}

}
