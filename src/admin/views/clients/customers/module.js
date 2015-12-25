export class AdminClientCustomersModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-clients-customers-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
