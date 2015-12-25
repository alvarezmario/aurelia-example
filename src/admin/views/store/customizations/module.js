export class AdminStoreCustomizationsModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-store-customizations-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
