import { Component,Input,HostBinding } from '@angular/core';

@Component({
  selector: 'app-commenti',
  templateUrl: './commenti.component.html',
  styleUrls: ['./commenti.component.css']
})
export class CommentiComponent {
@Input() cosa:String;
@HostBinding('attr.class') cssClass = 'card mt-4';
}
