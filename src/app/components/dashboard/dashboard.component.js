(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbDashboard', {
            templateUrl: 'src/app/components/dashboard/dashboard.html',
            controller: DashboardController
        }, []);

    /* @ngInject */
    function DashboardController($log) {
        // jshint validthis: true
        const vm = this;
        vm.$onInit = $onInit;

        function $onInit() {
            $log.debug('DashboardController init');
        }
    }
})();
