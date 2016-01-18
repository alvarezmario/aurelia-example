import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class ProductService {
  constructor(http) {
    this.http = http;
  }

  list() {
    let url = 'products?page=1&paginate=20&criteria[order_by]=&criteria[order_reverse]=true&criteria[visibility][0]=always&criteria[visibility][1]=products_only';

    return this
      .http
      .fetch(url)
      .then(response => response.json())
      .then(response => response._embedded.items)
      .catch(() => {});
  }

  get(id) {
    let url = `products/${id}`;

    return this
      .http
      .fetch(url)
      .then(response => response.json())
      .catch(() => {});
  }
}
