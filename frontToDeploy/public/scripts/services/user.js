'use strict';

angular.module('frontEndApp').factory('User', ['$resource', function ($resource){
	return $resource('https://damp-peak-6015.herokuapp.com/api/users/');
}]);