(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbDashboard', {
            templateUrl: 'src/app/components/dashboard/dashboard.html',
            controller: DashboardController
        });

    /* @ngInject */
    function DashboardController($scope, $log, $clientService) {
        // jshint validthis: true
        const vm = this;
        vm.searchTerm = '';

        vm.computerPage = null;
        vm.currentPage = 0;
        vm.sizePage = 20;
        vm.countComputer = 0;
        vm.totalPage = 0;

        vm.currentComputerList = [];
        vm.companies = [];

        vm.propertySorted = "name";
        vm.sortOrder = "ASC";

        vm.$onInit = $onInit;

        function $onInit() {
            $log.debug('DashboardController init' + $clientService);
            updatePage();
        }

        function fetchCompanies() {
            $clientService.getCompanies().then((resp) => {
                vm.companies = resp.data;
            }, () => {
                console.log('error ', arguments);
            });
        }

        function updatePage() {
            console.log('TODO prendre en compte le searchterm ' + vm.searchTerm);
            $clientService.getComputerPage(vm.currentPage, vm.sizePage, vm.propertySorted, vm.sortOrder).then((resp) => {
                console.log(resp.data);
                let pageInfo = resp.data;
                vm.totalPage = pageInfo.totalPages;
                vm.countComputer = pageInfo.totalElements;
                vm.currentComputerList = pageInfo.content;
            }, () => {
                console.log('TODO handle error');
            });
        }

        vm.toggleOrderProperty = function(newPropertySorty) {
            if (vm.propertySorted === newPropertySorty) {
                if (vm.sortOrder === 'ASC') {
                    vm.sortOrder = 'DESC';
                } else {
                    vm.sortOrder = 'ASC';
                }
            } else {
                vm.propertySorted = newPropertySorty;
            }
            updatePage();
        };

        vm.editComputer = function(computer) {
            console.log("TODO edit ", computer);
        }

    }
})();
