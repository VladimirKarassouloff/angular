/* eslint strict: [2, "global"] */
'use strict';

describe('hello component', () => {

    beforeEach(module('app.hello', $provide => {
        $provide.factory('hellocdb', () => {
            return {
                templateUrl: 'app/components/hello/shell.html'
            };
        });
    }));
    it('should render hello world', angular.mock.inject(($rootScope, $compile) => {
        const element = $compile('<hello>Loading...</hello>')($rootScope);
        $rootScope.$digest();
        const h1 = element.find('h1');
        expect(h1.html()).to.be.equals('Hello World!');
    }));
});
