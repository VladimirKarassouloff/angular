(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbAddComputer', {
            templateUrl: 'src/app/components/computer_add/computer_add.html',
            controller: ComputerController
        });

    /* @ngInject */
    function ComputerController($scope, $log, $state, $clientService) {
        // jshint validthis: true
        const vm = this;

        // All companies
        vm.companies = [];
        vm.computer = {};
        vm.$onInit = $onInit;

        function $onInit() {
            $log.debug('ComputerController init' + $clientService);
            $clientService.getCompanies().then((resp) => {
                vm.companies = resp.data;
                console.log(resp);
            });

            if ($state.params.computer) {
                console.log($state.params.computer);
                vm.computer = $state.params.computer;
            }
        }

        vm.submitForm = () => {
            if (vm.computer.id) {
                // TODO call update
                console.log('update : ', vm.computer);
            } else {
                // TODO call add
                console.log('add : ', vm.computer);
            }
        };

    }
})();
