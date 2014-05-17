
appRoot.controller('DemoController', function ($scope, $location, $resource) {

    var userResource = $resource('/api/users', {}, { update: { method: 'PUT' } });
    $scope.usersList = [];
    
    userResource.query(function (data) {
        $scope.usersList = [];
        angular.forEach(data, function (userData) {
            $scope.usersList.push(userData);
        });
    });

    $scope.selectedUsers = [];

    $scope.$watchCollection('selectedUsers', function () {
        $scope.selectedUser = angular.copy($scope.selectedUsers[0]);
    });

    $scope.userGrid = {
        data: 'usersList',
        multiSelect: false,
        selectedItems: $scope.selectedUsers,
        enableColumnResize: false,
        columnDefs: [
            { field: 'firstName', displayName: 'First Name', width: '25%' },
            { field: 'lastName', displayName: 'Last Name', width: '25%' },
            { field: 'email', displayName: 'Email', width: '25%' },
            { field: 'mobile', displayName: 'Mobile Number', width: '25%' }
        ]
    };

    $scope.updateUser = function (user) {
        userResource.update(user, function (updatedUser) {
            $scope.selectedUsers[0].id = updatedUser.id;
            $scope.selectedUsers[0].firstName = updatedUser.firstName;
            $scope.selectedUsers[0].lastName = updatedUser.lastName;
            $scope.selectedUsers[0].gender = updatedUser.gender;
            $scope.selectedUsers[0].mobile = updatedUser.mobile;
            $scope.selectedUsers[0].email = updatedUser.email;
            $scope.selectedUsers[0].city = updatedUser.city;
            $scope.selectedUsers[0].state = updatedUser.state;
            $scope.selectedUsers[0].country = updatedUser.country;
            $scope.selectedUsers[0].zip = updatedUser.zip;
        });
    };

    $scope.countryList = [
        {
            name: 'USA', id: 'usa', states: [
                { name: 'Alabama', id: 'al', cities: [{ name: 'Alabaster', id: 'al' }, { name: 'Arab', id: 'ar' }, { name: 'Banks', id: 'bk' }] },
                { name: 'Alaska', id: 'as', cities: [{ name: 'Lakes', id: 'lk' }, { name: 'Kenai', id: 'kn' }, { name: 'Gateway', id: 'gw' }] },
                { name: 'New Jersey', id: 'nj', cities: [{ name: 'Atlanta', id: 'at' }, { name: 'Jersey', id: 'js' }, { name: 'Newark', id: 'nw' }] },
                { name: 'New York', id: 'ny', cities: [{ name: 'Kingston', id: 'kg' }, { name: 'Lockport', id: 'lp' }, { name: 'Olean', id: 'ol' }] },
                { name: 'Texas', id: 'tx', cities: [{ name: 'Dallas', id: 'dl' }, { name: 'Austin', id: 'as' }, { name: 'Houston', id: 'hs' }] }]
        }
    ];

    $scope.clearCityAndZip = function () {
        $scope.selectedUsers[0].city = null;
        $scope.selectedUsers[0].zip = "";
    };

    $scope.$watch('selectedUsers[0].state', function (selectedStateId) {
        if (selectedStateId) {
            angular.forEach($scope.countryList[0].states, function (state) {
                if (selectedStateId == state.id) {
                    $scope.selectedState = state;
                }
            });
        }
    });

    var init = function () {

    }

    init();
});