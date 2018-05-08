var app = angular.module('app', []);

app.controller('Controller', [
  '$scope',
  '$window',
  '$location',
  '$anchorScroll',
  function($scope, $window, $location, $anchorScroll) {
    $scope.modules = ["Event Cover", "Text Block", "Announcement Bar", "Call to Action", "Event Details"]
    $scope.params = [1, 2, 3, 4, 5]
    $scope.showingParams = false;
    $scope.updateShowingParams = function(show) {
      $scope.showingParams = show
    }

    $scope.paramShowing = -1;

    $scope.showParam = function(index) {
      if (index == $scope.paramShowing) {
        $scope.paramShowing = -1;
      } else {
        $scope.paramShowing = index;
      }
    }

    // load()

  }
])
