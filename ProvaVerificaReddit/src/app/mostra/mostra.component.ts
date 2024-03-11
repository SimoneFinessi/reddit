import { Component, Input,HostBinding } from '@angular/core';
import {Mail} from './mail.model';

@Component({
  selector: 'app-mostra',
  templateUrl: './mostra.component.html',
  styleUrls: ['./mostra.component.css']
})
export class MostraComponent {
@HostBinding('attr.class') cssClass='card mt-4';
@Input() mostra:Mail

}
