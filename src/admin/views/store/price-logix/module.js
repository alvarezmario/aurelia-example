export class AdminStorePriceLogixModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-store-price-logix-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
