(function() {
  'use strict';
  app.service('restService', ['$http', function($http) {
    this.getAllData = function() {
      return $http.get('data/data.json')
      .then(function(response){        
        return response.data;
      });
    }
  }]);
}());
