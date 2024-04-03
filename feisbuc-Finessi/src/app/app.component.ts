import { Component } from '@angular/core';
import { Post } from './Post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feisbuc-Finessi';
  post:Post[]=[];
  constructor(){
  }

  addPost(nome: HTMLInputElement, contenuto: HTMLInputElement): boolean {
    this.post.push(new Post(nome.value, contenuto.value,0));
    nome.value = '';
    contenuto.value = '';
    return false;
  }
}
