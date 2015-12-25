export class AdminPartnersOverviewModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-partners-overview-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
