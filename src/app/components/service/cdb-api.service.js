(function () {
    'use strict';

    angular.module('app')
        .factory('$clientService', ClientService);

    /* @ngInject */
    function ClientService($http, $computerFactory) {
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
                }).then((resp) => {
                    let data = resp.data;
                    let mappedContent = [];
                    data.content.forEach((obj) => {
                        mappedContent.push($computerFactory.map(obj));
                    });
                    data.content = mappedContent;
                    return data;
                });
            },
            getCompanies: () => {
                return $http.get(urlCompanies);
            }
        };
    }

})();
