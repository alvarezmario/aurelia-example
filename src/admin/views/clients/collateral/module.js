export class AdminClientCollateralModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-clients-collateral-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
