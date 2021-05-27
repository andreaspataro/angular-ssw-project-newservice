import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './app.component';

@Injectable()
export class KeyvalueService {
  apiURL: string =
    'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';
  apiKey: string;
  constructor(private http: HttpClient) {}

  public keySet(key: string) {
    this.apiKey = key;
  }

  public getKey(): Promise<string> {
    return fetch(this.apiURL + '/new', { method: 'POST' })
      .then(response => response.json(), error => console.log(error))
      .then(key => (this.apiKey = key));
  }

  public getData(): Promise<string> {
    return fetch(this.apiURL + '/get?key=' + this.apiKey).then(
      response => response.json(),
      error => console.log(error)
    );
  }

  public setData(val: Array<Post>) {
    fetch(
      this.apiURL + '/post?key=' + this.apiKey + '&msg=' + JSON.stringify(val),
      { method: 'POST' }
    ).catch(error => console.log(error));
  }
}
