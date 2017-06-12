(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbDashboard', {
            templateUrl: 'src/app/components/dashboard/dashboard.html',
            controller: DashboardController
        });

    /* @ngInject */
    function DashboardController($state, $scope, $log, $clientService) {
        // jshint validthis: true
        const vm = this;
        vm.editMode = true;

        // Param request for the displayed page
        vm.searchTerm = '';
        vm.pageRequested = 0;
        vm.sizePage = 20;
        vm.propertySorted = 'name';
        vm.sortOrder = 'ASC';

        // Object containing list of computer, total number of items, ...
        vm.currentPage = {};

        vm.$onInit = $onInit;

        function $onInit() {
            $log.debug('DashboardController init' + $clientService);
            vm.updatePage();
        }

        vm.updatePage = () => {
            $clientService.getComputerPage(vm.pageRequested, vm.sizePage,
                vm.propertySorted, vm.sortOrder, vm.searchTerm).then((page) => {
                    console.log('Page : ', page);
                    vm.currentPage = page;
                }, () => {
                    console.log('TODO handle error');
                }
            );
        };

        vm.toggleEditMode = () => {
            vm.editMode = !vm.editMode;
        };

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
            vm.updatePage();
        };

        vm.setPageLength = (newSizeRequest) => {
            vm.sizePage = newSizeRequest;
            vm.updatePage();
        };

        vm.setPageRequested = (newPageRequested) => {
            vm.pageRequested = newPageRequested;
            vm.updatePage();
        };

        vm.editComputer = (computer) => {
            $state.go('computer', {computer: computer});
        };
    }

})();
