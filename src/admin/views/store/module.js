export class AdminStoreModule {
  configureRouter(config, router) {
    config.map([
      { route: 'products', name: 'admin-store-products', moduleId: './products/module', nav: true, title: 'Products' },
      { route: 'solutions', name: 'admin-store-solutions', moduleId: './solutions/module', nav: true, title: 'Solutions' },
      { route: 'catalogs', name: 'admin-store-catalogs', moduleId: './catalogs/module', nav: true, title: 'Catalogs' },
      { route: 'forms', name: 'admin-store-forms', moduleId: './forms/module', nav: true, title: 'Forms' },
      { route: 'suppliers', name: 'admin-store-suppliers', moduleId: './suppliers/module', nav: true, title: 'Suppliers' },
      { route: 'payment-methods', name: 'admin-store-payment-methods', moduleId: './payment-methods/module', nav: true, title: 'Payment methods' },
      { route: 'shipping', name: 'admin-store-shipping', moduleId: './shipping/module', nav: true, title: 'Shipping' },
      { route: 'customizations', name: 'admin-store-customizations', moduleId: './customizations/module', nav: true, title: 'Customizations' },
      { route: 'price-logix', name: 'admin-store-price-logix', moduleId: './price-logix/module', nav: true, title: 'PriceLogix' },
      { route: '', redirect: 'products' }
    ]);

    this.router = router;
  }
}
