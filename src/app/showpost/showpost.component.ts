import { Component, Input, OnInit } from '@angular/core';
import { KeyvalueService } from '../keyvalue.service';
import { Post } from '../app.component';

@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.component.html',
  styleUrls: ['./showpost.component.css']
})
export class ShowpostComponent implements OnInit {
  @Input() postContent: Post;
  @Input() posts: Array<Post>;
  @Input() kvs: KeyvalueService;
  constructor() {}
  clean() {
    this.postContent = undefined;
  }
  delete() {
    this.posts.splice(
      this.posts.findIndex(
        p =>
          p.title == this.postContent.title &&
          p.body == this.postContent.body &&
          p.check === this.postContent.check
      ),
      1
    );
    this.postContent = undefined;
    this.kvs.setData(this.posts);
  }
  ngOnInit() {}
}
