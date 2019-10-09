---
layout: post
title: Mi configuración de Neovim en 2019
---

Hace poco que me he pasado a Neovim, el fork optimizado (y muy refactorizado) de Vim, mantenido por una comunidad en 
lugar de un dictador benévolo. Los ultimos años, he sido usuario activo de VisualStudio Code, y antes que este, lo fui de Atom. Pero Vim y
yo tenemos ese tema pendiente, desde que era estudiante. Así que, aprovechando que he arreglado mi portátil y vuelvo a tener tecla Esc, ¡vamos allá!

Cabe destacar que en mi trabajo actual, tengo que tocar servidores a menudo, y bien es sabido que el único editor comunmente instalado en
casi cualquier UNIX o distribución GNU/Linux, es `vi` o `vim`. Así que, los conceptos básicos, y atajos de teclado para moverse por el fichero,
buscar, reemplazar, editar, etc, los tengo dominados, por lo que mis primesos pasos con Neovim, han sido **adaptar mi entorno** para las funciones
a las que estoy acostumbrado en Visual Studio Code.

![neovim corriendo sobre Windows Terminal](https://user-images.githubusercontent.com/5058655/66514324-69287d80-eacc-11e9-8e20-516d3232fcfd.png)

Estos son los [plugins y configuraciones](https://gist.github.com/JuanjoSalvador/f8e77a29be984769ebfde7c8361a4ff3) que he realizado.

## Plugins

'Instalados todos mediante [`vim-plug`](https://github.com/junegunn/vim-plug)!

### scrooloose/nerdtree

NERDTree añade un árbol de ficheros y directorios, que podemos utilizar para navegar por nuestro proyecto. Creo que es lo que más eché en falta
de VSCode/Atom cuando empecé a trabajar con Vim.

### Xuyuanp/nerdtree-git-plugin

Plugin para NERDTree que añade soporte para Git, marcando aquellos ficheros que tienen cambios pendientes de *stage*, por ejemplo.

### vim-airline y vim-airline-themes

Airline es uno de mis plugins favoritos. Se trata de una barra de estado/pestañas, personalizable y ligera, para Vim. Me gusta especialmente
porque te permite mostrar con un código de colores si estás en modo INSERT, SELECT, REPLACE, etc. El plugin `vim-airline-themes` en este caso,
te instala una serie de temas por defecto, que podemos cambiar a petición.

Aquí como tema, utilizo `luna`.

### tpope/vim-fugitive

Reconocido como el mejor plugin de git para Vim/Neovim, incluye un montón de cosas guays como marcaje de cambios sobre el fichero (líneas nuevas,
líneas modificadas, eliminadas, etc), así como un montón de funciones de git integradas directamente en el editor a través de comandos.

### Shougo/deoplete.nvim

Un capricho personal, y algo que también eché de menos de los editores visuales, es un autocompletar. Más vistoso que funcional, pero igualmente
importante y útil.

## Configuración propia

Además, de mi propia cosecha, he añadido algunas cosas.

### Tema y esquema de color

Buscando un tema que se pareciese al que tengo actualmente en VS Code, encontré [`Oceanic Next`](https://github.com/mhartington/oceanic-next).
Puedes instalarlo a través de `vim-plug`.

```vim
colorscheme OceanicNext
```

### Atajos de teclado

Este punto es bastante escueto, aunque seguramente lo termine expandiendo sobre la marcha.

Atajo de teclado para mostrar/ocultar NERDTree pulsando una tecla (muy útil, especialmente cuando no tienes una resolución muy amplia o un monitor pequeño)

```vim
map <F2> :NERDTreeToggle<CR>
```

Atajo para lanzar una tarea `build` por defecto configurada en un fichero `Makefile`. En VSCode puedes configurar tareas por entorno,
aquí puedes hacer algo parecido, pero recurriendo a los archifamosos Makefiles.

```vim
map <F8> :make<CR>
```

### Otros aspectos

Además, en mi `init.vim` tengo habilitadas las siguientes funciones:

```vim
" Habilita el resaltado de sintaxis
syntax enable
" Habilita la numeración de línea (absoluto)
set number
" Establece el tamaño de las tabulaciones en 2 espacios
set tabstop=2 shiftwidth=2 expandtab
```

Llegados a este punto, creo que lo único que echaré de menos de VS Code, será la propia interfaz gráfica y el uso de ratón.
