export class AdminModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-dashboard', moduleId: './views/dashboard', nav: true, title: 'Dashboard' },
      { route: 'clients', name: 'admin-dashboard', moduleId: './views/dashboard', nav: true, title: 'Clients' },
      { route: 'att', name: 'admin-dashboard', moduleId: './views/dashboard', nav: true, title: 'ActivateLogix' },
      { route: 'modules', name: 'admin-dashboard', moduleId: './views/dashboard', nav: true, title: 'Modules' },
      { route: 'reports', name: 'admin-dashboard', moduleId: './views/dashboard', nav: true, title: 'Reports' },
      { route: 'store-admin', name: 'admin-dashboard', moduleId: './views/dashboard', nav: true, title: 'Store Admin' },
      { route: 'partners', name: 'admin-dashboard', moduleId: './views/dashboard', nav: true, title: 'Partners' },
      { route: 'settings', name: 'admin-dashboard', moduleId: './views/dashboard', nav: true, title: 'Settings' },
      { route: 'help', name: 'admin-dashboard', moduleId: './views/dashboard', nav: true, title: 'Help' }
    ]);

    this.router = router;
  }
}
