(function () {
	'use strict';

angular.module('comics').service('MarvelApi', ['$q', '$http', function ($q, $http) {

		this.getHeroes = function () {
			return $http.get('/fbheroes')
		}

		this.createHeroes = function (hero) {
			return $http.get('/heroes?hero=' + hero)
		}
		
	}]);
})();