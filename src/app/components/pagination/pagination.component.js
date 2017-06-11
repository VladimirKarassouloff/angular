(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('app.pagination', {
            templateUrl: 'src/app/components/pagination/pagination.html',
            controller: PaginationController,
            bindings: {
                page: '<',
                events: '<'
            }
        });

    /* @ngInject */
    function PaginationController($scope, $log, $clientService) {
        // jshint validthis: true
        const vm = this;

        vm.linksLeftRight = 2;

        vm.page = null;

        vm.events = {};
        vm.myRange = [1,2];
        vm.$onInit = $onInit;
        vm.$onChanges = $onChanges;

        function $onChanges(changesObj) {
            console.log("$onChanges ", changesObj);
            if (changesObj.page) {
                vm.page = changesObj.page;
                generateRange();
            }
        }

        function $onInit() {
            $log.debug('DashboardController init');
            generateRange();
        }

        function generateRange() {
            if (!vm.page) {
                console.log("Nothing to change");
                return;
            }
            var indexes = [];
            console.log("TODO rajouter la current page");
            for (var i = vm.page.currentPage - vm.linksLeftRight; i < 2 * vm.linksLeftRight + 1; i++) {
                console.log(i);
                indexes = indexes.push(i);
            }
            console.log("index : ", indexes);

        }

        vm.changePage = (page) => {
            vm.events.changePage.call(page);
        };

        vm.changePageSize = (size) => {
            vm.events.changeSizePage.call(size);
        };

    }

})();
