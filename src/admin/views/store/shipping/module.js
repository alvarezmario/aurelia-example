export class AdminStoreShippingModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-store-shipping-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
