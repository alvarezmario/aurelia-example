export class AdminPartnersModule {
  configureRouter(config, router) {
    config.map([
      { route: 'overview', name: 'admin-partners-overview', moduleId: './overview/module', nav: true, title: 'Overview' },
      { route: 'partners', name: 'admin-partners-partners', moduleId: './partners/module', nav: true, title: 'Partners' },
      { route: 'leads', name: 'admin-partners-leads', moduleId: './leads/module', nav: true, title: 'Leads' },
      { route: 'opportunities', name: 'admin-partners-opportunities', moduleId: './opportunities/module', nav: true, title: 'Opportunities' },
      { route: 'launch-logix', name: 'admin-partners-launch-logix', moduleId: './launch-logix/module', nav: true, title: 'LaunchLogix' },
      { route: '', redirect: 'overview' }
    ]);

    this.router = router;
  }
}
