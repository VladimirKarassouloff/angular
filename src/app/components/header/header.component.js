(function () {
    'use strict';

    angular.module('app.common')
        .component('cdbHeader', {
            templateUrl: 'src/app/components/header/header.html',
            controller: HeaderController
        });

    /* @ngInject */
    function HeaderController() {
        // jshint validthis: true
        const vm = this;
    }

})();
