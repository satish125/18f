/* Basic Unit Test for the Main Controller */
describe('Controller: openFDAApp/mainCtrl', function() {

    var $scope, mainCtrl;

    beforeEach(module('openFDAApp'));

    beforeEach(inject(function($rootScope, $controller){
        $scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {'$scope': $scope});
    }));

    it('should have application version', function() {
        expect($scope.version).toEqual('Version 1.0.0 - 07.07.2015');
    });

    it('should contain the application title', function() {
        expect($scope.title).toEqual('Open FDA Dashboard');
    });
});