(function () {
    'use strict';
    angular
        .module('app.dashboard')
        .config(routesConfig);

    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('shell.computer-edit', {
                url: '/computer-edit',
                params: {
                    computer: null
                },
                component: 'cdbEditComputer'
            });
    }
})();
