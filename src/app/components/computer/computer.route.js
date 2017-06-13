(function () {
    'use strict';
    angular
        .module('app.dashboard')
        .config(routesConfig);

    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('shell.computer-edit', {
                url: '/computer-edit/:id',
                resolve: {
                    /* @ngInject */
                    computer: ($stateParams, $clientService) => {
                        return new Promise((resolve, reject) => {
                            if ($stateParams.computer !== null) {
                                console.log('We already have the computer : ', $stateParams.computer);
                                resolve($stateParams.computer);
                            } else {
                                $clientService.getComputer($stateParams.id).then((computer) => {
                                    console.log('We don\' have the computer yet, getting from WS ', computer);
                                    resolve(computer);
                                }, (err) => {
                                    reject('Error fetching computer !', err);
                                });
                            }
                        });
                    }
                },
                params: {
                    computer: null
                },
                component: 'cdbComputer'
            })
            .state('shell.computer-add', {
                url: '/computer-add',
                params: {
                    newComputer: true
                },
                component: 'cdbComputer'
            });
    }
})();
