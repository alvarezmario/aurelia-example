export class AdminStorePaymentMethodsModule {
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'admin-store-payment-methods-list', moduleId: './list', title: 'List' }
    ]);

    this.router = router;
  }
}
