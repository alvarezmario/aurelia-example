export class FrontModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'front-home', moduleId: './views/home', nav: true, title: 'Home' },
      { route: 'products', name: 'front-products', moduleId: './views/products/module', nav: true, title: 'Products' },
      { route: 'account', name: 'front-account', moduleId: './views/account/module', nav: true, title: 'Account' }
    ]);

    this.router = router;
  }
}
