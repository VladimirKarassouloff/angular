(function () {
    angular.module('app')
        .config(['$translateProvider', ConfigTranslation]);

    /* @ngInject */
    function ConfigTranslation($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix: 'src/resources/i18n/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
    }

})();
