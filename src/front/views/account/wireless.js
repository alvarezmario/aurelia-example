import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class AccountWireless {
  constructor(http) {
    this.http = http;
  }

  activate() {
    return this.http.fetch('users/wireless/me')
      .then(response => response.json())
      .then(response => {
        this.wireless = response;
        console.log(this.wireless);
      })
      .catch(() => {});
  }
}
