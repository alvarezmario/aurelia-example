export class AdminStoreProductsModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-store-products-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
