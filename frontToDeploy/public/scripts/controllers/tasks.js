'use strict';

angular.module('frontEndApp')
  .controller('TasksCtrl', ['$scope', 'Task', '$routeParams', '$location', function ($scope, Task, $routeParams, $location) {
    
    var userId = $routeParams.id;		

    $scope.tasks = Task.query({id: userId});

    $scope.wordOrder = 'description';

    $scope.sort = function(item){
    	$scope.wordOrder = item;
    	$scope.reverse = !$scope.reverse;
    };

    $scope.add = function (){
    	$location.path('users/' + userId + '/tasks/new');
    };

    $scope.edit = function(task){
        $location.path('users/' + userId + '/tasks/' + task.id + '/edit');
    };

    $scope.delete = function(task){
        for(var i = 0; i < $scope.tasks.length; i++){
            if($scope.tasks[i].id == task.id){
                $scope.tasks.splice(i, 1);
                break;
            }
        }
        Task.delete({id: userId, taskId: task.id});        
    };
  }]);
