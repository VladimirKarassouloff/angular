(function () {
    'use strict';
    angular
        .module('app.dashboard')
        .config(routesConfig);

    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('computer', {
                url: '/computer',
                params: {
                    computer: null
                },
                component: 'cdbComputer'
            });
    }
})();
