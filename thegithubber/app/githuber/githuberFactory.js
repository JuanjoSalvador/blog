(function(){
    'use_strict';
    
    angular.module('githuber')
        .factory('githuberFactory', githuberFactory);

        githuberFactory.$inject = ['$http'];
        function githuberFactory($http) {
            return {
                /**
                 * 
                 */
                getDatos: function(locat) {
                    return $http.get("https://api.github.com/search/users?q=+location:" + locat + "&page=1");
                },
                
                /**
                 * 
                 */
                page: function(locat, page) {
                    return $http.get("https://api.github.com/search/users?q=+location:" + locat + "&page=" + page);
                },
                
                /**
                 * 
                 */
                getUser: function(user) {
                    return $http.get("https://api.github.com/users/" + user);
                }
            }
        }
})();