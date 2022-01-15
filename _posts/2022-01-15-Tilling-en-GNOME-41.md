---
layout: post
title: "Tilling en GNOME 41"
tags: linux, debian, gnome
---

Algo que siempre había echado en falta en GNOME, era la posibilidad de disponer de un gestor de ventanas en mosaico, lo que llamamos *tilling* En Reddit, diariamente veo muchas capturas de pantalla de diferentes configuraciones de escritorio, donde predomina un componente común: Arch, i3-gaps y minimalismo. Y como uno es muy *culo veo, culo quiero*, y desde hace años soy bastante fan de las personalizaciones de escritorio, me ha apatecido probar la experiencia.

Para esto, he usado la extensión [`pop-shell@system76`](https://github.com/pop-os/shell) de GNOME. En distribuciones como Fedora o Arch, puedes instalarlo directamente desde los repositorios, pero en mi caso, para Debian, me ha tocado hacerlo manualmente.

Lo primero es clonar el repositorio e instalar las dependencias.

```pre
$ sudo apt install node-typescript make
$ git clone https://github.com/pop-os/shell.git
```

Y a continuación, instalar con `make`.

```pre
$ cd shell
$ make local-install
```

En este paso preguntará si quieres cambiar los atajos de teclado a los de Pop-Shell. En mi caso, he preferido mantener los que tengo actualmente, pero lo dejo a tu elección.

Finalmente, es posible que te devuelva un error indicando que la extensión no existe. En ese caso, no tienes que preocuparte, una vez finalizada la instalación, incluso con el error en cuestión, solo tenemos que reiniciar GNOME Shell, y activar manualmente desde `gnome-extensions`.

```pre
$ killall -HUP gnome-shell
$ gnome-extensions enable pop-shell@system76
```

![Captura de GNOME Shell](https://pbs.twimg.com/media/FJK8ReWWUAUuyd6?format=jpg&name=large)