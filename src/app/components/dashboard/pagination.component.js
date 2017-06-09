(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbPagination', {
            templateUrl: 'src/app/components/dashboard/pagination.html',
            controller: PaginationController
        });

    /* @ngInject */
    function PaginationController($scope, $log, $clientService) {
        // jshint validthis: true
        const vm = this;


        vm.$onInit = $onInit;

        function $onInit() {
            console.log("éjeokofk");
            debugger;
            $log.debug('DashboardController init' + $clientService);
        }

    }
})();
