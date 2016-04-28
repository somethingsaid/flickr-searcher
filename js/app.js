angular.module('myApp', ['ngAnimate'])
    .controller('myController', function($http, $scope) {
	    /* Prepare endpoint parameters */
	    var flickrKey = '05b7506e3fd86ae08a540a59e4e7f40d';
	    var params = {
		    method: 'flickr.photos.search',
		    api_key: flickrKey,
		    tags: $scope.searchTag,
		    format: 'json',
		    nojsoncallback: 1
		}
    });