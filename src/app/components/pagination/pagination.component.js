(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('app.pagination', {
            templateUrl: 'src/app/components/pagination/pagination.html',
            controller: PaginationController,
            bindings: {
                page: '<',
                /*
                 must contains methods '
                 changeSizePage(int),
                 setPageRequested(int)
                 */
                events: '<',
                optionsdisplay: '<'
            }
        });

    /* @ngInject */
    function PaginationController($scope, $log) {
        // jshint validthis: true
        const vm = this;

        vm.drawStartPages = false;
        vm.drawEndPages = false;

        vm.linksLeftRight = 5;

        vm.page = null;

        vm.optionsdisplay = [];
        vm.events = {};
        vm.myRange = [];

        vm.$onInit = $onInit;
        vm.$onChanges = $onChanges;

        function $onChanges(changesObj) {
            if (changesObj.page) {
                vm.page = changesObj.page.currentValue;
                generateRange();
            }
        }

        function $onInit() {
            $log.debug('DashboardController init');
            generateRange();
        }

        function generateRange() {
            if (!vm.page || vm.page.currentPage === undefined) {
                return;
            }
            let indexes = [];
            console.log(vm.page.currentPage);
            let start = vm.page.currentPage - vm.linksLeftRight;
            for (let i = start; i < start + (2 * vm.linksLeftRight + 1); i++) {
                indexes.push(i);
            }

            // Shifting to avoid negative pages
            if (vm.page.currentPage - vm.linksLeftRight < 0) {
                indexes = indexes.map(a => a + Math.abs(vm.page.currentPage - vm.linksLeftRight));
            }

            // Shifting to avoid wrong pages
            if (indexes[indexes.length - 1] >= vm.page.totalPages) {
                indexes = indexes.map(a => a - (indexes[indexes.length - 1] - vm.page.totalPages));
            }

            // Cutting part of the array for inexisting pages
            indexes = indexes.filter(a => a < vm.page.totalPages && a >= 0);

            if (indexes[0] !== 0) {
                indexes = indexes.splice(2, indexes.length);
                vm.drawStartPages = true;
            } else {
                vm.drawStartPages = false;
            }

            if (indexes[indexes.length - 1] !== vm.page.totalPages - 1) {
                indexes = indexes.splice(0, indexes.length - 2);
                vm.drawEndPages = true;
            } else {
                vm.drawEndPages = false;
            }

            vm.myRange = indexes;
        }

        vm.changePage = (page) => {
            vm.events.changePage.call(null, page);
        };

        vm.changePageSize = (size) => {
            vm.events.changeSizePage.call(null, size);
        };

        vm.isCurrentPage = (p) => {
            return vm.page.currentPage === p;
        };

        vm.isCurrentSize = (s) => {
            return vm.page.size === s;
        };
    }

})();
