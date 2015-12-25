export class AdminStoreFormsModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-store-forms-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
