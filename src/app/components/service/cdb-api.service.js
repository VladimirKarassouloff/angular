(function () {
    'use strict';

    angular.module('app.services')
        .factory('$clientService', ClientService);

    /* @ngInject */
    function ClientService($http, $computerFactory) {
        let baseApi = 'http://localhost:8080/mydeployyy/api';
        let urlCompanies = baseApi + '/companies';
        let urlComputer = baseApi + '/computers';
        let urlComputerPage = urlComputer + '/page';
        let urlComputerById = urlComputer + '/';
        let urlComputerAdd = urlComputer;
        let urlComputerEdit = urlComputer + '/';

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
            },
            getComputer: (id) => {
                return $http.get(urlComputerById + id).then((resp) => {
                    return $computerFactory.map(resp.data);
                });
            },
            addComputer: (computer) => {
                return $http.post(urlComputerAdd, $computerFactory.mapToWs(computer)).then((resp) => {
                    return {status: resp.status, data: resp.data};
                }, (err) => {
                    return {status: err.status};
                });
            },
            editComputer: (computer) => {
                return $http.post(urlComputerEdit + computer.id, $computerFactory.mapToWs(computer)).then((resp) => {
                    return {status: resp.status};
                }, (err) => {
                    return {status: err.status};
                });
            }
        };
    }

})();
