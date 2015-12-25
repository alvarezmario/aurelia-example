export class AdminClientsOrdersModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-clients-orders-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
