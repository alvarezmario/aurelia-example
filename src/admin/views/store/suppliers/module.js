export class AdminStoreSuppliersModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-store-suppliers-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
