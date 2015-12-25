import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {HttpClient, json} from 'aurelia-fetch-client';

const AUTH_TOKEN_NAME = 'ml-auth-token';
const CLIENT_ID = 'MV8ydDRycXFxeHI2bzA4MDBnOGtnc3NnZ3Mwb3dzd2tra29zMGtrd28wc3cwbzhva3c4Yzo1eXVjZ2NlbmJuazBnYzBrMDBrc2dnY3djY3djNDBzZzBnb2Nzc2Njd2dnODB3dzRrYw';

@inject(HttpClient, Router)
export default class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.storage = window.localStorage;
  }

  login(username, password) {
    this
      .http
      .fetch('oauth/v2/token', {
        method: 'post',
        headers: {
          'Authorization': `Basic ${CLIENT_ID}`
        },
        body: json({ grant_type: 'password', username: username, password: password })
      })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }

        throw new Error(response.statusText);
      })
      .then((response) => {
        let token = response.access_token;
        this.saveToken(token);

        this.router.navigateToRoute('front-module');
      })
      .catch((err) => {});
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  getToken() {
    return this.storage.getItem(AUTH_TOKEN_NAME);
  }

  saveToken(token) {
    this.storage.setItem(AUTH_TOKEN_NAME, token);
  }

  removeToken() {
    this.storage.removeItem(AUTH_TOKEN_NAME);
  }
}
