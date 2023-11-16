---
layout: post
title: "Problemas de firmware en Debian Trixie"                                                                                       
tags: linux, debian
---

Recientemente he actualizado mi paquetería en Debian Trixie, y esta actualización incluía una subida de versión del kernel. ¡Que grandes noticias! Pero durante este proceso, me han aparecido varios warnings indicando que un módulo (i915) no estaba presente. Algo que me ha resultado raro, porque juraría que tengo todo instalado desde que instalé Trixie en este portátil.


No le hago mucho caso, y procedo a reiniciar el sistema para arrancar la nueva versión del kernel, y... resulta que nunca llega a iniciar el servidor gráfico. Así que reinicio, y verifico que no es un problema de Wayland, arrancando desde el modo seguro y revisando el diario de SystemD.

```pre
$ journalctl -xb
```

Ahí es donde veo varios mensajes relacionados con el módulo del kernel faltante. 

### Buscando un culpable

Así que mi primera impresión es, ¿puede que se hayan eliminado los drivers del módulo de gráficos? Paso inmediatamente a hacer una búsqueda del metapaquete relacionado.

```pre
$ apt search i915
```

Lo que me devuelve un paquete relacionado y no instalado: `firmware-misc-nonfree`. `nonfree`, esto último me llama la atención, ya que, recordemos que desde hace unos años Debian tiene una [política bastante fuerte contra los paquetes no libres](https://www.debian.org/doc/debian-policy/ch-archive.html#the-non-free-archive-area), excluyéndolos en un repositorio aparte. 

### ¡Pero yo aún tengo los repositorios non-free en mi lista!

Es probable que en algún momento y frente a algún paquete diferente (estuve trasteando con Steam en esta máquina), se haya marcado este firmware como obsoleto y se haya eliminado por accidente. De nuevo, reviso y me aseguro que mis repositorios incluyen *non-free*, y paso a instalar el metapaquete faltante. Una vez hecho, reinicio el sistema, y aprovecho el momento para ir a por un café. Sin embargo, antes de que me levante, el equipo termina de arrancar, y puedo ver la pantalla de inicio de sesión de GNOME.

### Conclusión

Podemos dar por concluído el caso, y corroborar que *algún proceso* seguramente desatendido, ha borrado el módulo requerido. Pero sin embargo, existe la posibilidad de que haya sido yo en algún proceso anterior con el fin de optimizar el rendimiento. Por otro lado, he buscado y no he hayado rastro alguno de alternativa de este paquete con alguna licencia libre, motivo por el que, empiezo una vez más a tener mis reticencias con Debian a nivel usuario.