(function () {
    'use strict';

    angular.module('app')
        .component('cdbLanguageChanger', {
            templateUrl: 'src/app/components/i18n/i18n.html',
            controller: I18N
        });

    /* @ngInject */
    function I18N($translate, $log) {
        // jshint validthis: true
        const vm = this;

        vm.$onInit = $onInit;
        vm.languages = ['fr', 'en'];

        function $onInit() {
            $log.debug('I18N init');
        }

        vm.changeLanguage = (newLanguage) => {
            $translate.use(newLanguage);
        };

    }

})();
