export class AdminSettingsDiscountsModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-settings-discounts-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
