(function() {
  'use strict';
  app.controller('appCtrl', ['$scope', 'restService', function($scope, restService) {
    $scope.user = {};
    $scope.edit = false;
    $scope.add = false;
    /**
     * appCtrl
     * @description :: Obtiene el json con los datos por medio del servicio
     * @params      ::
     */
    restService.getAllData()
    .then(function(users) {
      $scope.users = users;
    });
    /**
     * appCtrl
     * @description :: Añade nuevo usuario a la lista
     * @params      :: User
     */
    $scope.addUser = function(user) {
      $scope.add = false;
      $scope.users.push(user);
    };
    /**
     * appCtrl
     * @description :: remueve el usuario de la lista
     * @params      :: index
     */
    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };
    /**
     * appCtrl
     * @description :: editUser obtiene el usuario a editar y saveUser guarda
     * @params      :: User
     */
    $scope.editUser = function(user) {
      $scope.user = user;
      $scope.edit = true;
    };
    $scope.saveUser = function() {
      $scope.user = {};
      $scope.edit = false;
    }
  }]);
}());
