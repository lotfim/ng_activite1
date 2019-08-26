import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.scss']
})
export class NewPostComponentComponent implements OnInit {

  postForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private postService: PostService, private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      title: '',
      content: ''
    });
  }

  onAddPost(){
    const formValue = this.postForm.value;
    const title = formValue['title'];
    const content = formValue['content'];
    this.postService.addPost(title, content);
    this.router.navigate(['/posts']);
  }

}
