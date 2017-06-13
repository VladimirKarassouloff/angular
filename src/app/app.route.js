(function() {
    'use strict';
    angular
        .module('app')
        .config(routesConfig);

    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('shell.404', {
                url: '/404',
                templateUrl: 'src/app/404.html'
            });
    }
})();
