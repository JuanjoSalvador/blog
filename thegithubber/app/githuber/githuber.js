(function() {

    'use strict';

    angular.module('githuber', [
        'ui.router'
    ])

    .config(
    ['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('app.githuber', {
                    url: '/githuber',
                    templateUrl: 'app/githuber/view/githuber.html',
                    controller: 'githuberController',
                    controllerAs: 'vm',
                })
            }
        ]
    );

})();