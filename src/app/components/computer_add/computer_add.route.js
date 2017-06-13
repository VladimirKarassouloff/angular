(function () {
    'use strict';
    angular
        .module('app.dashboard')
        .config(routesConfig);

    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('shell.computer-add', {
                url: '/computer-add',
                params: {
                    computer: null
                },
                component: 'cdbAddComputer'
            });
    }
})();
