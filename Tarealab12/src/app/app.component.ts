import { Component } from '@angular/core';
import { PostModel } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogposts';
  showNewPostForm = false;
  totalPostCount = 1;

  newPostModel: PostModel;
  postsArray:any = [
    {title:'Ejemplo1',headline:'Ejem1',description:'texto ejemplo 1'},
  
  ];

  onClickNewPost(){
    this.showNewPostForm = true;
  }

  
  onNewPostSubmit(postModel:PostModel){
    this.newPostModel = postModel;
    this.postsArray.push(this.newPostModel);
    console.log(this.postsArray);
    this.totalPostCount++;
    this.showNewPostForm = false;
  }



}
