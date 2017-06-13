(function() {
    'use strict';
    angular
        .module('app.dashboard')
        .config(routesConfig);

    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('shell.dashboard', {
                url: '/dashboard',
                component: 'cdbDashboard'
            })
            .state('shell.dashboard2', {
                url: '/',
                component: 'cdbDashboard'
            });
    }
})();
