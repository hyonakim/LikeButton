
let MylikeButton = function ($scope) {
  $scope.count = 0;
  $scope.manyLikes = 'likes';

  $scope.likeMe = function () {
    $scope.count++;

    $scope.manyLikes = ($scope.count === 1) ? 'like' : 'likes';
  };
};

MylikeButton.$inject =['$scope'];

export default MylikeButton;