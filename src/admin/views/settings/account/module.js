export class AdminSettingsAccountModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-settings-account-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
