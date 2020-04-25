---
layout: post
title: "Integración Continua en Lua con GitHub Actions"
---

En los tiempos en los que solo teníamos TravisCI como vía para implantar integración continua en nuestros proyectos, hacerlo en Lua era
un problema, dado que no es un lenguaje que soportase de manera oficial. Había que montar un apaño para instalar Lua, Luarocks, y los paquetes
necesarios. Proyectos como [hererocks](https://github.com/mpeterv/hererocks) ganaron mucho en este campo.

Pero ahora, gracias a GitHub Actions, podemos olvidarnos de TravisCI y otros servicios externos, dejando que la plataforma base sea quien se ocupe
de todo, de forma similar a como funciona Gitlab CI. Si nunca has trabajado con este tipo de herramientas, te recomiendo encarecidamente que 
eches un vistazo primero a la [documentación de GitHub al respecto](https://help.github.com/es/actions/getting-started-with-github-actions).

En nuestro workflow necesitaremos añadir, en primer lugar, estas dos acciones: 

* `leafo/gh-actions-lua@v5`
* `leafo/gh-actions-luarocks@v2`

Esto nos permite ejecutar scripts en Lua, e instalar Luarocks, y serán la base sobre la que construiremos nuestro flujo. A continuación, tenemos
que definir las acciones que se llevarán a cabo. En mi caso, solo he necesitado instalar `luacheck`, para realizar un análisis de sintaxis y de código,
y `ldoc` para generar la documentación, ambos cada vez que hago commit sobre la rama `master`.

```yml
    - name: install modules
      run: luarocks install ldoc luacheck
      
    - name: check the code
      run: luacheck src/
      
    - name: build the docs
      run: ldoc .
 ```
 
 Sustituye `ldoc` por `busted` por ejemplo, y en lugar de generar la documentación, podrás ejecutar una serie de tests. De esta forma, tendríamos algo
 como esto en nuestro workflow completo.
 
 ```yml
 name: Luacheck

on:
  push:
    branches:
      - master
      - dev
jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - uses: leafo/gh-actions-lua@v5
    - uses: leafo/gh-actions-luarocks@v2

    - name: install modules
      run: luarocks install luacheck
        
    - name: check the code
      run: luacheck src 
  ```
  
  Como extra, en el caso de mi workflow para documentación, también he configurado que tras generarse en `master`, se haga un push automático
  sobre dicha rama, la cual automáticamente se publica a través de GitHub Pages. Para esto, añadí la acción 
  [`github-actions-x/commit@v2.5`](https://github.com/github-actions-x/commit), que te permite configurar un commit en tu nombre de forma automática.
  
  Fantástico, ¿verdad? Ya no tenemos exucusa para no automatizar tareas repetitivas y aumentar así nuestra productividad.
  
  
