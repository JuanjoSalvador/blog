---
layout: post # Sustituye el layout si lo usas uno diferente
title: WebApp con AngularJS y Node.js # Nombre generado automáticamente
---
Mi meta para esta semana, ha sido diseñar una aplicación basada en AngularJS y ejecutarla desde Node.js, con meros propósitos de formación. Para mi sorpresa, esta tarea no ha sido tan difícil como se planteaba en un principio, y me ha servido de toma de contacto con Node.js, un framework que siempre he tenido bastante olvidado.

Este sistema sirve, por ejemplo, para poder servir datos obtenidos mediante Node.js en un frontend basado en AngularJS. Sin embargo, para este artículo, he optado por utilizarlo simplemente para cargar una aplicación sencilla como ya enseñé en la entrada sobre [Hello World en AngularJS](http://juanjosalvador.es/2016/03/30/Hello-World!-desde-AngularJS/).

Aquí tendríamos dos ficheros: `server.js` (Node.js, backend y servidor HTTP) y `index.html` (AngularJS y HTML, vista de mi app).

{% gist e65ee82d40a284a670cabb7679e6fc03 %}

Mi próxima meta, será **utilizar Node.js para generar un JSON a partir de datos obtenidos de una web**, y mostrarlos desde **AngularJS**.
