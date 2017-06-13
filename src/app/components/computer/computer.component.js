(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbComputer', {
            templateUrl: 'src/app/components/computer/computer.html',
            controller: ComputerController,
            bindings: {
                computer: '<'
            }
        });

    /* @ngInject */
    function ComputerController($scope, $log, $state, $clientService, $computerFactory/*, test*/) {
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
            });

            if ($state.params.computer) {
                vm.computer = $state.params.computer;
            } else if ($state.params.newComputer) {
                vm.computer = $computerFactory.newComputer();
            }
        }

        vm.submitForm = () => {
            if (vm.computer.id == null) {
                $clientService.addComputer(vm.computer).then((resp) => {
                    if (resp.status === 200) {
                        $state.go('shell.dashboard');
                    }
                });
            } else {
                $clientService.editComputer(vm.computer).then((resp) => {
                    if (resp.status === 201) {
                        $state.go('shell.dashboard');
                    }
                });
            }
        };

    }
})();
