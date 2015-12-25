export class FrontModule {
  configureRouter(config, router) {
    config.title = 'Mobillogix S.L';
    config.map([
      { route: '', name: 'front-home', moduleId: './views/home', nav: true, title: 'Home' },
      { route: 'account', name: 'front-account', moduleId: './views/account/module', nav: true, title: 'Account' }
    ]);

    this.router = router;
  }
}
