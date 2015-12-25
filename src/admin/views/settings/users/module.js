export class AdminSettingsUsersModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-settings-users-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
