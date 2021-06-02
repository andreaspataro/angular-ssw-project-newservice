import { Component } from '@angular/core';
import { KeyvalueService } from './keyvalue.service';

export class Post {
  constructor(
    public title: string,
    public body: string,
    public check: boolean
  ) {}
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postIt: Array<Post> = [];
  selezione: Post;
  apikey: string;
  importantSelector: boolean = false;

  constructor(public kvs: KeyvalueService) {}

  public showPost(post: Post) {
    this.selezione = new Post(post.title, post.body, post.check);
  }

  public important() {
    if (!this.importantSelector) {
      document.getElementById('buttonImportant').innerHTML = 'Tutti i messaggi';
      this.importantSelector = true;
    } else {
      document.getElementById('buttonImportant').innerHTML =
        'Solo Post-It importanti';
      this.importantSelector = false;
    }
  }

  public getVal() {
    this.kvs
      .getData()
      .then((data: string) => (this.postIt = JSON.parse(data)))
      .catch(err => {
        console.log(err);
        this.apikey = undefined;
      });
  }

  public setVal(post: Post) {
    this.postIt.push(post);
    this.kvs.setData(this.postIt);
  }

  public setKey(key: string) {
    this.apikey = key;
    this.kvs.keySet(key);
    this.getVal();
  }

  public getKey() {
    this.kvs.getKey().then((key: string) => {
      this.apikey = key;
      this.kvs.setData(this.postIt);
    });
  }
}

//38b8f3a3
