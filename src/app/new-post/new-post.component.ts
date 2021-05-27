import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Input() id: string;
  @Output() newPostEvent = new EventEmitter<Post>();
  constructor() {}
  newPost(title: string, body: string, check: boolean) {
    this.newPostEvent.emit(new Post(title, body, check));
  }

  ngOnInit() {}
}
