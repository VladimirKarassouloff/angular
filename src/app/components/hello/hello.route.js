(function() {
    'use strict';
    angular
        .module('app.hello')
        .config(routesConfig);

    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('app', {
                url: '/hello',
                component: 'hellocdb'
            });
    }
})();
