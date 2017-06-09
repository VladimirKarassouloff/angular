/* eslint strict: [2, "global"] */
'use strict';

describe('dashboard component', () => {

    beforeEach(module('app.dashboard', $provide => {
        $provide.factory('cdbDashboard', () => {
            return {
                templateUrl: 'app/components/dashboard/dashboard.html'
            };
        });
    }));

});
