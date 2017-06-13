(function() {
    'use strict';
    angular
        .module('app')
        .config(routesConfig);

    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('shell', {
                abstract: true,
                url: '/shell',
                component: 'cdbShell'
            });
    }
})();
