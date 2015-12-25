import 'fetch';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {HttpClient} from 'aurelia-fetch-client';
import AuthorizeStep from './config/authorize-step';
import AuthService from 'services/auth';

@inject(Router, HttpClient, AuthService)
export class App {
  constructor(router, http, auth) {
    http.configure(config => {
      config
        .withBaseUrl('mobillogix_api/')
        .withDefaults({
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .withInterceptor({
          request(request) {
            if (auth.isLoggedIn()) {
              request.headers.append('Authorization', `Bearer ${auth.getToken()}`);
            }

            return request;
          },

          response(response) {
            if (response.status === 401) {
              auth.removeToken();
              router.navigateToRoute('login');
            }

            return response;
          }
        });
    });
  }

  configureRouter(config, router) {
    config.title = 'Mobillogix S.L';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: 'login', name: 'login', moduleId: './views/auth/login', title: 'Login', auth: false },
      { route: 'front', name: 'front-module', moduleId: './front/module', title: 'Front', auth: true },
      { route: 'admin', name: 'admin-module', moduleId: './admin/module', title: 'Admin', auth: true },
      { route: '', redirect: 'front' }
    ]);

    this.router = router;
  }
}
