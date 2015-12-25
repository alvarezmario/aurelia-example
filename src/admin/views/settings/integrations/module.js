export class AdminSettingsIntegrationsModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-settings-integrations-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
