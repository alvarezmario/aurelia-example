import {inject} from 'aurelia-framework';
import {ProductService} from './service';

@inject(ProductService)
export class ProductsList {
  constructor(productService) {
    this.productService = productService;
  }

  activate(params) {
    return this.productService.get(params.id)
      .then(response => this.product = response);
  }
}
