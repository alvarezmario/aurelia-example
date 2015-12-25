export class AdminPartnersPartnersModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-partners-partners-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
