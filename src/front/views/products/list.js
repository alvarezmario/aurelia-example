import {inject} from 'aurelia-framework';
import {ProductService} from './service';

@inject(ProductService)
export class ProductsList {
  constructor(productService) {
    this.productService = productService;
  }

  activate() {
    return this.productService.list()
      .then(response => this.products = response);
  }
}
