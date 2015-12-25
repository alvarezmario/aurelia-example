export class AdminClientQuotesModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-clients-quotes-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
