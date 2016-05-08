(function(){
    'use_strict';

    angular.module('githuber')

        .controller('githuberController', githuberController);

        githuberController.$inject = ['githuberFactory', '$state'];
        function githuberController(githuberFactory, $state) {
            
            // Variable vm para acceder a las funciones desde fuera del controlador
            var vm = this;
                        
            // Obtiene el contenido de un JSON con getDatos.
            // var term = término de búsqueda pasado por el usuario
            vm.getDatos = getDatos;
            vm.nextPage = nextPage;
            vm.prevPage = prevPage;          
            vm.getDetails = getDetails;
            
            /**
             * Obtiene un listado de datos en JSON con TODOS los usuarios cuya localización coincida
             * con el parámetro de búsqueda.
             * @param: localización
             */
            function getDatos(locat) {
                vm.currentPage = 1;
                githuberFactory.getDatos(locat).then(
                    function(res) {
                        vm.respuesta = res;
                        console.log("SUCCESS! \nTotal: " + vm.respuesta.data.total_count);
                        vm.totalPages = eval(Math.floor(vm.respuesta.data.total_count/30) + 1);
                    },
                    function(err) {
                        console.log("Error!");
                        console.log(err);
                    }
                );
            }
            
            /**
             * Obtiene la siguiente página del listado de datos en JSON, a partir de la actual y el JSON obtenido con getDatos().
             * @param: localización
             */
            function nextPage(locat) {
                nextPage = vm.currentPage + 1;
                
                githuberFactory.page(locat, nextPage).then(
                    function(res) {
                        vm.respuesta = res;
                        console.log("Next page loaded! (" + nextPage + ") \nTotal: " + vm.respuesta.data.total_count);
                        vm.currentPage = nextPage;
                    },
                    function(err) {
                        console.log("Error!");
                        console.log(err);
                    }
                );
            }
            
            /**
             * Obtiene la anterior página del listado de datos en JSON, a partir de la actual y el JSON obtenido con getDatos().
             * @param: localización
             */
            function prevPage(locat) {
                prevPage = vm.currentPage - 1;
                
                githuberFactory.page(locat, prevPage).then(
                    function(res) {
                        vm.respuesta = res;
                        console.log("Previous page loaded! (" + prevPage + ") \nTotal: " + vm.respuesta.data.total_count);
                        vm.currentPage = prevPage;

                    },
                    function(err) {
                        console.log("Error!");
                        console.log(err);
                    }
                );
            }
            
            /**
             * Carga una vista con detalles del usuario: nombre, avatar, email, etc.
             * @param: usuario
             */
            function getDetails(user) {
                $state.go('app.githuberDetails', {
                    username: user
                });
            }
        }
        
})();