export class AccountModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'account-profile', moduleId: './profile', nav: true, title: 'Profile' },
      { route: 'orders', name: 'account-orders', moduleId: './orders', nav: true, title: 'Orders' },
      { route: 'quotes', name: 'account-quotes', moduleId: './quotes', nav: true, title: 'Quotes' },
      { route: 'shipping-info', name: 'account-shipping-info', moduleId: './shipping-info', nav: true, title: 'Shipping info' },
      { route: 'billing-info', name: 'account-billing-info', moduleId: './billing-info', nav: true, title: 'Billing info' },
      { route: 'invoices', name: 'account-invoices', moduleId: './invoices', nav: true, title: 'Invoices' },
      { route: 'wireless', name: 'account-wireless', moduleId: './wireless', nav: true, title: 'Wireless' }
    ]);

    this.router = router;
  }
}
