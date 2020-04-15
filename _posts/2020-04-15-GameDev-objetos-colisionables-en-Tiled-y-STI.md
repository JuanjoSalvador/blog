---
layout: post
title: "GameDev: objetos colisionables en LÖVE2D con Tiled y STI"
---

Aunque sigo desarrollando y haciendo pequeños cambios en **Awesome Space Rocks Shooter**, el confinamiento me ha causado inquietudes respecto a otros temas de desarrollo con Love2D que hace tiempo tenía pendientes, en este caso, el sistema de físicas. Ya en su día trasteé con Box2D (la famosa librería de C para físicas) y SDL, pero aunque me atrae, a la vez me repele, por la complejidad que a día de hoy me supone C, y la falta de tiempo que tengo para aprenderlo en profundidad; es una de esas cosas que uno hace en sus vacaciones, en lugar de en sus tardes libres.

Con este objetivo en mente, empecé a montar un prototipo de un juego que utiliza la gravedad como mecánica para resolver puzzles. Otros juegos como **VVVVVV** ya lo han utilizado antes, con una sorprendente capacidad para crear situaciones que te hacen comerte el coco mientras te lo pasas pipa, así que tampoco estoy creando nada nuevo. Dada la complejidad de los mapas requeridos para que realmente este tipo de juegos sean un reto, no me planteo diseñarlos a mano a golpe de bloques, mi propuesta para esto, es utilizar [Tiled](https://www.mapeditor.org) para diseñarlos en un entorno amigable, y luego integrarlos en el juego mediante la librería [STI](https://github.com/karai17/Simple-Tiled-Implementation/) de LÖVE2D. El único problema era hacer colisionables los diferentes objetos del mundo- Bueno, y la ausencia de una documentación clara.

Tras mucho indagar, he dado con la solución:

1. En cada tile que queramos que sea colisionable, desde el editor de colisiones (derecha), marcamos la zona que será colisionable. En mi caso, lo he hecho con toda la loseta.

2. En los atributos propios que podemos añadirle a cada loseta, añadimos la propiedad `collidable`, de tipo `bool`, y la marcamos con un tick para que su valor sea `true` (izquierda).

![Editor de tiles en Tiled](/resources/images/editor.jpg)

Y con esto, ya estaría listo. Para confirmar que se han creado como objetos colisionables, si estás usando el plugin `box2d` de STI, puedes depurarlo así:

```lua
function love.draw()
  map.draw()
  map.box2d_draw()
end
```

Si por el contrario, estás utilizando `bump`, la función a utilizar sería `map:bump_draw()` en su lugar.

![Ventana de juego con cajas de colisión resaltadas](/resources/images/juego.jpg)
