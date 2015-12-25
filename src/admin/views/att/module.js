export class AdminAttModule {
  configureRouter(config, router) {
    config.map([
      { route: 'reports', name: 'admin-att-reports', moduleId: './reports/module', nav: true, title: 'Reports' },
      { route: '', redirect: 'reports' }
    ]);

    this.router = router;
  }
}
