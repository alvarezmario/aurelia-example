export class AdminPartnersOpportunitiesModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-partners-opportunities-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
