import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() title: string ;
  @Input() content: string ;
  @Input() loveIts: number ;
  @Input() created_at: Date;
  @Input() id: number;
  @Input() index: number;
  
  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  onDislike(index: number){
	  this.postService.dislikePost(index);
  }
  
  onLike(index: number){
    this.postService.likePost(index);
  }

  onDelete(index: number){
    if(confirm('Êtes-vous sûr de vouloir supprimer cet article?')){
      this.postService.deletePost(index);
    }
    else{
      return null;
    }
  }
}
