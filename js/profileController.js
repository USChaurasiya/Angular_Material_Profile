myApp.controller('profileCtrl', function($scope, $mdDialog) {
  $scope.showHints = true;

  $scope.submitted = false;


  // function to submit the form after all validation has occurred
  $scope.submitForm = function() {

     $scope.submitted = true;

    // check to make sure the form is completely valid
    if ($scope.userForm.$valid) {
      alert('our form is amazing');
    }
    else {
      alert('ERROR');
    }
  };
      return $scope.showDialog = function(evt) {
        return $mdDialog.show({
          controller: function($scope) {
            return angular.extend($scope, {

              closeDialog: function() {
                return $mdDialog.hide();
              }
            });
          },
          templateUrl: 'dialogContent',
          targetEvent: evt
        });
      };
    });
