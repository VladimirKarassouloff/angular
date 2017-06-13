(function () {
    'use strict';

    angular.module('app')
        .factory('$computerFactory', ComputerFactory);

    /* @ngInject */
    function ComputerFactory($filter) {

        function mapDateForWS(date) {
            if (date != null && date !== '') {
                return $filter('date')(date, 'yyyy-MM-dd');
            } else {
                return '';
            }
        }

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
            },
            mapToWs: (computer) => {
                return {
                    id: computer.id,
                    name: computer.name,
                    introduced: mapDateForWS(computer.introduced),
                    discontinued: mapDateForWS(computer.discontinued),
                    companyId: computer.companyId
                };
            },
            mapDateForWS: mapDateForWS,
            newComputer: () => {
                return {
                    id: null,
                    name: '',
                    companyName: '',
                    introduced: null,
                    discontinued: null,
                    companyId: null
                };
            }
        };
    }

})();
