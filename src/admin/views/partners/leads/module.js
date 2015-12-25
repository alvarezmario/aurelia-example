export class AdminPartnersLeadsModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-partners-leads-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
