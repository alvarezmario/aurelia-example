import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Home {
  constructor(http) {
    this.http = http;
  }

  activate() {
    return this.http.fetch('info')
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(() => {});
  }
}
