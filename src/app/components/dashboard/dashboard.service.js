(function () {
    'use strict';

    angular.module('app.dashboard')
        .factory('$clientService', ClientService);

    /* @ngInject */
    function ClientService($http) {
        var baseApi = 'http://localhost:8080/mydeployyy/api';
        var urlCompanies = baseApi + '/companies';
        var urlComputerPage = baseApi + '/computers/page';

        return {
            getComputerPage: (page, size, property, direction, search = '') => {
                return $http.get(urlComputerPage, {
                    params: {
                        page: page,
                        size: size,
                        property: property,
                        direction: direction,
                        search: search
                    }
                });
            },
            getCompanies: () => {
                return $http.get(urlCompanies);
            }
        };
    }

})();
