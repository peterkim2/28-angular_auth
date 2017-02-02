'use strict';

describe('Auth Service', function() {
  beforeEach( () => {
    angular.mock.module('cfgram');
    angular.mock.inject(( $rootScope, authService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('authService.getToken()', () => {
    it('should return a token', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');

      this.authService.getToken()
      .then( token => {
        expect(token).toEqual('test token');
      })
      .catch( err => {
        expect(err).toEqual(null);
      });

      this.$rootScope.$apply();
    });
  });

  describe('authService.login()', () => {
    it('should login succesfully', () => {
      let user = {
        username: 'testuser',
        password: '12341234'
      };
      let base64 = this.$window.btoa(`${user.username}:${user.password}`);
      let headers = {
        Accept: 'application/json',
        Authorization: `Basic ${base64}`,
      };

      this.$httpBackend.expectGET('http://localhost:8000/api/login', headers)
        .respond(200, 'test token');

      this.authService.login(user)
      .then( token => {
        expect(token).toEqual('test token');
      })
      .catch( err => {
        expect(err).toEqual(null);
      });

      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });
});
