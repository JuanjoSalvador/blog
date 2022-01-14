---
layout: post
title: ¡Estoy creando un juego!
---

![](https://img.itch.zone/aW1hZ2UvNTI1OTcxLzI3MzIyNDYucG5n/original/fm%2FA9h.png)

Tras la pasada [JamToday 2019](https://jsalvador.me/blog/2019/09/30/IV-JamToday-Almeria/), me quedó la espinita clavada de continuar
desarrollando algo que me hiciese verdadera ilusión, y desde hace varios años, el desarrollo de videojuegos ha sido algo que me ha 
atraído y me ha dado miedo a partes iguales.

Comenzó con la idea de crear un juego base, un esqueleto para poder hacer otro juego más complejo encima, con un diseño base de clases,
funciones y demás componentes. Pero se me fue un poco de las manos, y empecé a crear **Awesome Space Rocks Shooter**, un juego-tributo 
al clásico [*Asteroids* de Atari](https://www.youtube.com/watch?v=9Ydu8UhIjeU), pero hecho con Löve2D y algunas mejoras gráficas.

<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    After 10 minutes playing, near to 3GB of RAM. OK, time to rewrite some components.
  </p>
  &mdash; Juanjo Salvador (@Linuxneitor) 
  <a href="https://twitter.com/Linuxneitor/status/1199368604048904201?ref_src=twsrc%5Etfw">
    November 26, 2019
  </a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

El juego ha tenido sus momentos buenos y sus momentos malos. El bug de los 3GB de RAM fue quizás el peor, por suerte lo pude solventar a 
tiempo, y no quiero imaginarme que hubiese pasado si esto me hubiese sucedido en mitad de una gamejam.

## Sobre ASRS

En ASRS encarnas a la valiente Jana, la piloto del White Falcon, una nave de combate tipo cazarrocas, una modificación del caza de 
combate habitual pero equipado con proyectiles capaces de desintegrar asteroides y otras rocas espaciales, con fines de minería, 
o en este caso, protegerse de las constantes lluvias de meteoritos que azotan el planeta. Cada asteroide que impacte contra el planeta, 
dañará los escudos, y cuando estos lleguen a cero, fin del juego. Para evitarlo, debemos disparar nuestros proyectiles contra los 
objetos rocosos, y destruirlos antes de que sea demasiado tarde.

El White Falcon por suerte, también está equipado con una procesadora de mineral, y un equipo de nanobots capaces de reparar tanto los
escudos del planeta, como nuestra nave. Pero para eso necesitamos materia prima, concretamente la contenida en los asteroides.

Cada asteroide puede dejarnos en el aire **hierro**, necesario para reparar los escudos y la nave, **cobre**, necesario para reparar los
circuitos de la nave, y **magnesio**, un elemento que añadido al combustible, nos permite movernos a mayor velocidad durante un periodo
de tiempo. Para procesar esto, se requiere energía, ¡pero no hay que preocuparse! Porque nuestra querida piloto, añadió paneles solares
la nave, de forma que cada segundo que pasemos en el espacio, estaremos recargando baterías.

## Motivación

El desarrollo de este juego está siendo meramente un hobby. No espero ganar dinero con el, ni publicarlo en Steam o que una revista 
me haga una review, por ello estoy poniendole cariño y esfuerzo, pero en mis ratos libres. Mi objetivo con esto es mejorar mis dotes
como programador, y también como diseñador gráfico y de videojuegos, para que en las siguientes jams, no nos pille desprevenidos.

## Herramientas utilizadas

Para este juego estoy haciendo uso mayormente de software libre, tales como:

* **Inkscape** para los gráficos vectoriales
* **GIMP** para los retoques y las spritesheets
* **Löve2D** como motor de juego
* VisualStudio Code con los siguientes plugins:
  * [Lua](https://marketplace.visualstudio.com/items?itemName=gccfeli.vscode-lua) para añadir soporte al lenguaje
  * [Love2D Snippets](https://marketplace.visualstudio.com/items?itemName=pixelwar.love2dsnippets)
  * [LÖVE Launcher](https://marketplace.visualstudio.com/items?itemName=SK83RJOSH.love-launcher)
  
Como extra, tengo que mencionar el fantástico trabajo de [Oblidivm](https://soundcloud.com/oblidivm), quien me permitió usar su música
para el juego, ¡muchas gracias!

## Publicación

El juego actalmente se encuentra en fase activa de desarrollo. El código está [disponible en Gitlab](https://gitlab.com/solfamidas/game-skeleton),
y [publicado en Itch.io](https://jsalvador.itch.io/awesome-space-rocks-shooter).

<iframe frameborder="0" src="https://itch.io/embed/525971?border_width=5&amp;bg_color=4f6781&amp;fg_color=ffffff&amp;link_color=fa5c5c&amp;border_color=444b59" width="560" height="175"></iframe>
