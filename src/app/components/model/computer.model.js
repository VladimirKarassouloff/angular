(function () {
    'use strict';

    angular.module('app')
        .factory('$computerFactory', ComputerFactory);

    /* @ngInject */
    function ComputerFactory() {
        return {
            map: (dataWebservice) => {
                return {
                    id: dataWebservice.id,
                    name: dataWebservice.name,
                    companyName: dataWebservice.companyName,
                    introduced: (!dataWebservice.introduced || dataWebservice.introduced === '') ? null : new Date(dataWebservice.introduced),
                    discontinued: (!dataWebservice.discontinued || dataWebservice.discontinued === '') ? null : new Date(dataWebservice.discontinued),
                    companyId: dataWebservice.companyId
                };
            }
        };
    }

})();
