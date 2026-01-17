---
layout: post
title: "Sunset es un cliente de Bluesky, impulsado por Vue y Nuxt"
tags: proyectos, vue, nuxt
---

Como reza el título, Sunset, es mi nuevo proyecto estrella. Un cliente de Bluesky, experimental, que empezó siendo un _¿y si...?_, y que ha cogido carrerilla.

### El pasado de Sunset

Allá por octubre de 2024, recién despedido de la empresa donde trabajaba (y casi que doy las gracias, pero ese es otro tema) y en búsqueda de empleo activa, emprendí un nuevo proyecto con objeto de reforzar mis conocimientos de frontend, cacharrear con Vue y experimentar con Nuxt. Este proyecto, originalmente, iba a ser un cliente minimalista y simple de Bluesky, que me permitiese ver la cronología de mi usuario, enviar posts, dar me gusta y repostear cosas. Pero nada más.

El problema es que conforme iba haciendo y deshaciendo, refactorizando, leyendo y en general, aprendiendo, añadí alguna que otra característica más. Por ejemplo, añadí una línea de tiempo para recibir notificaciones y perfiles de usuario. Llegados a ese punto, tenía un cliente que excedía de mi idea básica, y ya estaba camino de un cliente más completo. Sin embargo, el fuelle se terminó pronto, entre otros, porque me liaron para meterme a otro curso de especialización, en este caso de videojuegos, en el mismo mes, así que mi tiempo disponible empezó a tender a cero, lo que supuso un parón indefinido, a lo que sumamos mi reincorporación al mercado laboral en marzo de 2025 (¡yuju!). Todo esto ha resultado que, hasta hace bien poco, no había podido retomar el proyecto. Un parón de ¡casi año y medio!

### El presente de Sunset

Recientemente he actualizado algunas cosas con respecto a la versión que liberé originalmente en octubre. He añadido soporte para muchas cosas que no tenía, mejorado la interfaz en términos visuales, y he corregido algunos bugs imperdonables. 

<center>
    <figure>
        <img src="{{ site.url }}/blog/assets/20260116/image.png" />
    </figure>
</center>

También he mejorado su presencia en redes sociales, por fin he empezado a subir actualizaciones en la [cuenta oficial](https://bsky.app/profile/sunset-bsky.bsky.social/) que le creé cuando empecé el proyecto. 

Y lo más importante: ¡está disponible para pruebas públicas! Puedes verlo en funcionamiento en [sunset.jsalvador.me](https://sunset.jsalvador.me). El dominio es temporal, mientras pienso a donde va este proyecto.

### El futuro... de Sunset

Bueno, ahora mismo hay algunas características básicas que no funcionan. Siguiendo la filosofía de _primero haz que exista, luego hazlo perfecto_, voy a continuar añadiendo estas funciones antes de refactorizar y optimizar, que aunque es algo que tendré que hacer en algún momento, tengo tiempo para ello.

Por ahora, el mapa de carreteras está así:

* [x] Iniciar sesión
* [x] Cerrar sesión
* [x] Recibir notificaciones (_parcialmente implementado_)
* [x] Publicar posts
* [x] Indicar que te gusta un post
* [x] Republicar un post
* [ ] Responder a un post
* [ ] Citar un post
* [ ] Seguir usuarios
* [ ] Dejar de seguir usuarios
* [ ] Modificar tu perfil
* [ ] Recibir notificaciones en segundo plano
* [ ] Subir imágenes o vídeos

Paralelamente, me gustaría añadir también:

* [ ] Soporte para OAuth
* [ ] Mejoras en la estructura
* [ ] Optimización y reutilización de componentes

Y en general, mucho trabajo pendiente para tener un cliente completito. Pero partiendo de la base de que, hice todo lo básico en dos o tres días, sin tener muchos conocimientos de Nuxt, creo que puedo estar orgulloso del comienzo. Quiero ver hasta donde llega esto, y por supuesto, ¡es software libre! Así que, si te gusta el proyecto y quieres colaborar, estaré encantado de recibir PRs.

Durante los próximos días probablemente dedicaré un tiempo a la planificación más exhaustiva, a sacar tareas pendientes en GitHub e intentar avanzar con todo esto.


