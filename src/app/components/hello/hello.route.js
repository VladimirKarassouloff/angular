(function() {
    'use strict';
    angular
        .module('app.hello')
        .config(routesConfig);

    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('shell.hello', {
                url: '/hello',
                component: 'hellocdb'
            });
    }
})();
