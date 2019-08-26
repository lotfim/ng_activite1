import { Component, OnInit} from '@angular/core';
import { PostService } from './services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private postService:PostService){

  }	
  ngOnInit(){
	this.postSubscription = this.postService.postSubject.subscribe(
		(posts: any[]) => {
			this.posts = posts;
		}
	);
	this.postService.emitPostSubject(); 
  }
  
  title = 'activite1';
  posts : any[];
  postSubscription: Subscription;
}
