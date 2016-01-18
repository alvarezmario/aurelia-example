import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Home {
  overridableSlider = 'default';
  sliderOptions = ['default', 'gcn', 'adcom'];

  constructor(http) {
    this.http = http;
  }

  switchSlider(e) {
    this.overridableSlider = e.target.value;
  }

  activate() {
    return this.http.fetch('info')
      .then(response => response.json())
      .then(response => {})
      .catch(() => {});
  }
}
