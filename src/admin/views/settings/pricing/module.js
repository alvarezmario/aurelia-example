export class AdminSettingsPricingModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-settings-pricing-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
