export class AdminStoreSolutionsModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-store-solutions-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
