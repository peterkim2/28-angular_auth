'use strict';

require('./_thumbnail-container.scss');

module.exports = {
  template: require('./thumbnail-container.html'),
  controllerAs: 'thumnailContainerCtrl',
  bindings: {
    gallery: '<'
  }
};
