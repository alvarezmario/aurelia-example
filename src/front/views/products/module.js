export class ProductModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'products-list', moduleId: './list', nav: true, title: 'Products' },
      { route: '/:id', name: 'products-view', moduleId: './view' }
    //   { route: 'orders', name: 'account-orders', moduleId: './orders', nav: true, title: 'Orders' }
    ]);

    this.router = router;
  }
}
