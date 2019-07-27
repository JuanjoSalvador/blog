---
layout: post
title: Actualizando GRUB2 desde el modo Live
---

Recientemente, y por problemas de espacio en mi disco duro, he tenido que eliminar el arranque dual con Windows 10 y sustituir el espacio
previamente ocuopado por Microsoft, por una copia de mi partición `root`, con el doble de espacio, ya que en el momento, me era imposible
actualizar paquetes.

## Un poco de historia

Partimos de la base de que, esta instalación, se realizó en el año 2014 originalmente. Y por algún motivo hice 2 particiones primarias 
para Windows 10, y una extendida para todas las particiones que usé en Linux (root, home, y swap). Así que, eliminamos las particiones de
Windows, y con ayuda de [Gparted](https://gparted.org/) y [Clonezilla](https://clonezilla.org/), creamos una nueva partición primaria y 
clonamos los datos de la original. Pero por un fallo de planificación, en lugar de clonar, arrancar en la nueva partición, y actualizar paquetes,
pensando en que el orden de los factores no altera el producto, se me ocurre ampliar la partición original, arrancar y actualizar.

*«No tiene por qué salir nada mal»*, pensé. Pero siguiendo la [Ley de Murphy](https://es.wikipedia.org/wiki/Ley_de_Murphy), si algo puede salir
mal, saldrá mal. Y eso fue exactamente lo que pasó. Debido a mi hardware antiguo, ya no soportado por los drivers propietarios de NVIDIA,
y la poca atención que estaba prestando a la actualización de paquetes, esta última terminó mal, dejando colgados algunos módulos del kernel.
Esto último provocó que el sistema no pudiese terminar de arrancar. 

## ¡Toca modo live!

Descargamos una ISO live de Debian, la montamos en una memoria USB (siempre es bueno tener una exclusiva para estos casos), y arrancamos el
equipo desde esa imagen live. Aquí tengo que agradecer a [roadmr](https://askubuntu.com/a/145253/562552), usuario de AskUbuntu, por echarme
un cable.

En resumen:

* Arrancamos modo live.
* Abrimos una terminal.
* Montamos la partición que toque (puedes localizarla con ayuda de `fdisk`)
* Montamos (¡atención!) las particiones adicionales:
  * `mount --bind /dev /mnt/dev`
  * `mount --bind /proc /mnt/proc`
  * `mount --bind /sys /mnt/sys`
  * `mount --bind /run /mnt/run` (esta última no la menciona roadmr, ahora explico por qué es necesaria)
* Cambiamos el sistema de raiz con `chroot`
* Y... lanzamos un `update-grub`.

Ahora, ¿a qué se debe el que necesitemos montar también `/run`?

## Device not intialized... ¿qué?

En mis primeros intentos, antes de montar también `/run/udev`, durante los procesos que involucran actualización de GRUB2, encontré este
mensaje de error repetido cada poco tiempo:

```
WARNING: Device /dev/sda1 not initialized in udev database even after waiting 10000000 microseconds.
WARNING: Device /dev/sda5 not initialized in udev database even after waiting 10000000 microseconds.
WARNING: Device /dev/sda6 not initialized in udev database even after waiting 10000000 microseconds.
```

Y la verdad, no logré encontrar mucho al respecto. Como mucho, problemas similares relacionados con `lvm2` en Arch Linux, ¿pero qué tiene
esto que ver con Debian? Tuve suerte de que [Ville Korhonen tuviese el mismo problema que yo](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=918590#27),
con Debian testing, a principios de año. En su correo, indicaba que su solución fue montar además la ruta `/run/udev`. Sorprendentemente, aunque
con cierto sentido, esta fue mi solución.

Conseguimos así que terminase de actualizarse el GRUB, y disponer ahora de una nueva entrada para mi segunda partición raíz de Debian (pendiente
de eliminar cuando pueda clonarla a un SSD), y que se eliminase la entrada muerta para Windows 10, ya no presente en mi portátil.
