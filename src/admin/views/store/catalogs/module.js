export class AdminStoreCatalogsModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-store-catalogs-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
