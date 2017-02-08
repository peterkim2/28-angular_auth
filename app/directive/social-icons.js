'use strict';

require('./_social-icons.scss');

module.exports = function() {
  return {
    restrict: 'EAC',
    template: require('./social-icons.html'),
    controller: ['$log', SocialIconsController],
    bindToController: true,
    controllerAs: 'socialIconsCtrl',
    scope: {
      title: '@'
    }
  };
};

function SocialIconsController() {
  this.icons = ['fb', 'twitter', 'instagram'];
}
