(function () {
    'use strict';

    angular.module('app')
        .component('cdbShell', {
            templateUrl: 'src/app/components/shell/shell.html',
            controller: ShellController
        });

    /* @ngInject */
    function ShellController($log) {
        // jshint validthis: true
        const vm = this;
        vm.$onInit = $onInit;

        function $onInit() {
            $log.debug('ShellController init');
        }
    }
})();
