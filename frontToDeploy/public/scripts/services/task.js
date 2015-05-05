'use strict';

angular.module('frontEndApp').factory('Task', ['$resource', function ($resource){
	return $resource('https://damp-peak-6015.herokuapp.com/api/users/:id/tasks/:taskId', { id: '@id', taskId: "@taskId"}, { 'update' : { method: 'PATCH'}});
}]);