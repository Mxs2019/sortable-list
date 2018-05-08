var app = angular.module('app', []);

app.controller('Controller', [
  '$scope',
  '$window',
  '$location',
  '$anchorScroll',
  function($scope, $window, $location, $anchorScroll) {
    $scope.modules = ["Event Cover", "Text Block", "Announcement Bar", "Call to Action", "Event Details"]
    $scope.selectedModule = null;
    $scope.params = [1, 2, 3, 4, 5]
    $scope.updateSelectedModule = function(module) {
      $scope.selectedModule = module
    }

    $scope.paramShowing = -1;

    $scope.showParam = function(index) {
      if (index == $scope.paramShowing) {
        $scope.paramShowing = -1;
      } else {
        $scope.paramShowing = index;
      }
    }

    $scope.deleteModule = function(index) {
      $scope.modules.splice(index, 1)
    }

    $scope.addModule = function(index, above) {

      if (!above) {
        index += 1;
      }
      $scope.modules.splice(index, 0, "Module " + $scope.modules.length)
      $scope.updateSelectedModule($scope.modules[index])
    }

    // load()

  }
])
