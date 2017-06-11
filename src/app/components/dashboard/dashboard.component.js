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
        vm.editMode = true;

        // Param request for the displayed page
        vm.searchTerm = '';
        vm.pageRequested = 0;
        vm.sizePage = 10;
        vm.propertySorted = "name";
        vm.sortOrder = "ASC";

        // Object containing list of computer, total number of items, ...
        vm.currentPage = {};
        
        // All companies
        vm.companies = [];


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
            $clientService.getComputerPage(vm.pageRequested, vm.sizePage, vm.propertySorted, vm.sortOrder).then((resp) => {
                console.log(resp.data);
                vm.currentPage = resp.data;
            }, () => {
                console.log('TODO handle error');
            });
        }

        vm.toggleEditMode = () => {
            vm.editMode = !vm.editMode;
        }

        vm.toggleOrderProperty = (newPropertySorty) => {
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

        vm.editComputer = (computer) => {
            console.log("TODO edit ", computer);
        }

        vm.setPageLength = (newSizeRequest) => {
            vm.sizePage = newSizeRequest;
            updatePage();
        }

        vm.setPageRequested = (newPageRequested) => {
            vm.pageRequested = newPageRequested;
            updatePage();
        }
    }

    
})();
