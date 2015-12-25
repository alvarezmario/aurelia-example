export class AdminAttReportsModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-att-reports-list', moduleId: './list' }
    ]);

    this.router = router;
  }
}
