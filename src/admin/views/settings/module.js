export class AdminSettingsModule {
  configureRouter(config, router) {
    config.map([
      { route: 'account', name: 'admin-settings-account', moduleId: './account/module', nav: true, title: 'Account' },
      { route: 'pricing', name: 'admin-settings-pricing', moduleId: './pricing/module', nav: true, title: 'Pricing' },
      { route: 'discounts', name: 'admin-settings-discounts', moduleId: './discounts/module', nav: true, title: 'Discounts' },
      { route: 'billing', name: 'admin-settings-billing', moduleId: './billing/module', nav: true, title: 'Billing' },
      { route: 'users', name: 'admin-settings-users', moduleId: './users/module', nav: true, title: 'Users' },
      { route: 'integrations', name: 'admin-settings-integrations', moduleId: './integrations/module', nav: true, title: 'Integrations' },
      { route: 'addons', name: 'admin-settings-addons', moduleId: './addons/module', nav: true, title: 'Add-Ons' },
      { route: '', redirect: 'account' }
    ]);

    this.router = router;
  }
}
