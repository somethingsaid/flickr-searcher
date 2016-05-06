angular.module('myApp', ['ngAnimate'])
    .controller('myController', ['$http', '$scope', '$sce', function($http, $scope, $sce) {
    	var init = function() {
    		$scope.callComplete = false;
    		$scope.callError = false;
    	}

    	$scope.submit = function() {
    		init();
    		if ($scope.searchForm.$valid) {
    			$scope.query = $scope.searchTag;
    			console.log('Valid form: ' + $scope.query);

				/* Prepare endpoint parameters */
				var flickrKey = '05b7506e3fd86ae08a540a59e4e7f40d';
				var params = {
					method: 'flickr.photos.search',
					api_key: flickrKey,
					tags: $scope.query,
					format: 'json',
					nojsoncallback: 1
				}

				/* Make call to Flickr */
				$http( {
					url: 'https://api.flickr.com/services/rest',
					method: 'GET',
					params: params
					})
				.then(function(response) {
					$scope.callComplete = true;
					$scope.photos = response.data.photos.photo;
					console.log($scope.photos);
				}, function(response) {
					$scope.callError = true;
				});
			}
    		else {
    			console.log('Invalid');
    		}
    	}
    }]);