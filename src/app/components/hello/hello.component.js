(function () {
    'use strict';

    angular.module('app.hello')
        .component('hellocdb', {
            templateUrl: 'src/app/components/hello/hello.html',
            controller: HelloController
        });

    /* @ngInject */
    function HelloController($log) {
        // jshint validthis: true
        const vm = this;
        vm.hello = 'Hello World!';
        vm.$onInit = $onInit;

        function $onInit() {
            $log.debug('HelloController init');
        }
    }
})();
