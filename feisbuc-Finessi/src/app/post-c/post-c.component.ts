import { Component,HostBinding,Input } from '@angular/core';
import { Post } from '../Post.model';
import { HtmlParser } from '@angular/compiler';
@Component({
  selector: 'app-post-c',
  templateUrl: './post-c.component.html',
  styleUrls: ['./post-c.component.css']
})
export class PostCComponent {
@HostBinding('attr.class') cssClass = 'card mt-4';
@Input() visual:Post
comm:string[]=[]

like():boolean{
  this.visual.like();
  return false
}
addcomm(comm:HTMLInputElement):boolean{
  this.comm.push(comm.value)
  comm.value =""
  return false
}
}
