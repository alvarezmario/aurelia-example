export class AdminPartnersLaunchLogixModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-partners-launch-logix-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
