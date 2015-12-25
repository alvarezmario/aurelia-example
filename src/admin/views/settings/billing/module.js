export class AdminSettingsBillingModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-settings-billing-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
