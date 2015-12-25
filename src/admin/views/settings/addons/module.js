export class AdminSettingsAddonsModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-settings-addons-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
