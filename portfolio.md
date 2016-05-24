---
layout: page
title: Portfolio
permalink: /portfolio/
---
<script>
angular.module('portfolio', [])
    .controller('portfolioCtrl', portfolioCtrl);

portfolioCtrl.$inject = ['$scope']
function portfolioCtrl($scope) {
    this.getProject = getProject;
    
    var projectList = 
    [
        {
            "name":"Proyecto 1",
            "desc":"Descripcion del proyecto 1.",
            "url":"repoURL"
        },
        {
            "name":"Proyecto 2",
            "desc":"Descripcion del proyecto 2.",
            "url":"repoURL"
        },
        {
            "name":"Proyecto 3",
            "desc":"Descripcion del proyecto 3.",
            "url":"repoURL"
        },
        {
            "name":"Proyecto 4",
            "desc":"Descripcion del proyecto 4.",
            "url":"repoURL"
        }
    ]
    
    function getProject(id) {
        $scope.show = true;
        
        var project = projectList[id];

        $scope.name  = project.name;
        $scope.desc  = project.desc;
        $scope.url   = project.url;
    }
}  
</script>

<div ng-app="portfolio">
  <div ng-controller="portfolioCtrl as ctrl">
      
      <!-- Project links. Use it to view accross projects -->
      <a href="#" ng-click="ctrl.getProject(0)"><img src="img.png" width="200" height="200"></a>
      <a href="#" ng-click="ctrl.getProject(1)"><img src="img.png" width="200" height="200"></a>
      <a href="#" ng-click="ctrl.getProject(2)"><img src="img.png" width="200" height="200"></a>
      <a href="#" ng-click="ctrl.getProject(3)"><img src="img.png" width="200" height="200"></a>
      
      <table ng-show="show">
          <tr>
              <!-- NAME -->
              <td><h3><span ng-bind="name"></span></h3></td>
          </tr>
          <tr>
              <!-- DESCRIPTION -->
              <td><span ng-bind="desc"></span></td>
          </tr>
          <tr>
              <!-- URL -->
              <td><span ng-bind="url"></span></td>
          </tr>
      </table>
  </div>
</div>


### Proyectos
Algunos proyectos en los que he trabajado.

  * **Comicbook Packager**. Herramienta en CLI para empaquetar comics digitales. [Enlace](http://juanjosalvador.es/2015/11/11/Comicbook-Packager-mi-autoempaquetador-de-comics/)
  
  * **SakuraChan**. Bot para Telegram, escrito en node.js que permite traducir de japonés a español y viceversa usando el API de Google Translate. [Repositorio](https://github.com/JuanjoSalvador/SakuraChan)
  
  * **MOC Twitter Sharing**. Script Ruby que permite compartir automáticamente lo que estás escuchando en cada momento, desde Music on Console. [Repositorio](https://github.com/JuanjoSalvador/moc-twitter-sharing)

### Charlas y conferencias
Charlas y conferencias que he impartido.

  * **El estándar HTML5** *en IES Celia Viñas*
  * **Instalar Linux y no morir en el intento** *en Andalucía Compromiso Digital*
  * **Automatización de tareas con Bash en GNU/Linux** *en el Centro Guadalinfo de Lubrín*
  * **Introducción a SQL Injection** *en las Jornadas HackLab 2015*

### Contribuciones
Causas y colectivos u organizaciones con las que colaboro.

  * **HackLab Almería** - http://hacklabalmeria.net/
  * **Club Linux Almería**
  * **Programa Espacial Almeriense** - http://programaespacialalmeriense.space/
