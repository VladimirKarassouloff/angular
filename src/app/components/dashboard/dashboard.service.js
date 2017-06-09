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
            getComputerPage: function (page, size, property, direction) {
                return $http.get(urlComputerPage + '?page=' + page + '&size=' + size +
                    '&property=' + property + '&direction=' + direction);/*.then(function () {
                    console.log('Success getting computer page', arguments);
                }, function () {
                    console.log('Error getting computer page', arguments);
                });*/
            },
            getCompanies: function () {
                return $http.get(urlCompanies);/*.then(function () {
                    console.log('Success getting companies', arguments);
                }, function () {
                    console.log('Error getting companies', arguments);
                });*/
            }
        };
    }

})();
