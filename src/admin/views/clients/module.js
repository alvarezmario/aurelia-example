export class AdminClientsModule {
  configureRouter(config, router) {
    config.map([
      { route: 'orders', name: 'admin-clients-orders', moduleId: './orders/module', nav: true, title: 'Orders' },
      { route: 'quotes', name: 'admin-clients-quotes', moduleId: './quotes/module', nav: true, title: 'Quotes' },
      { route: 'customers', name: 'admin-clients-customers', moduleId: './customers/module', nav: true, title: 'Customers' },
      { route: 'collateral', name: 'admin-clients-collateral', moduleId: './collateral/module', nav: true, title: 'Collateral' },
      { route: '', redirect: 'orders' }
    ]);

    this.router = router;
  }
}
