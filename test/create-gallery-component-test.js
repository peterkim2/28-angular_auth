'use strict';

describe('Create Gallery Component', function() {
  beforeEach( () => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    });
  });

  describe('createGalleryCtrl.createGallery()',() => {
    it('should return new gallery', () =>{
      let createGalleryCtrl = this.$componentController('createGallery', null);
      let exampleGallery = {
        name: 'test name',
        desc: 'test description'
      };

      let headers = {
        Accept: 'application/json',
        Authorization: 'Bearer test token',
        'Content-Type': 'application/json'
      };

      let url = `${__API_URL__}/api/gallery`;

      this.$httpBackend.expectPOST(url, exampleGallery, headers).respond(200);

      createGalleryCtrl.gallery = exampleGallery;
      expect(createGalleryCtrl.gallery.name).toEqual(exampleGallery.name);
      expect(createGalleryCtrl.gallery.desc).toEqual(exampleGallery.desc);
      createGalleryCtrl.createGallery();
      this.$rootScope.$apply();
    });
  });
});
