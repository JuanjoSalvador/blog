---
layout: post
title: "Jekyll builds: de GitHub Pages a GitHub Actions"
description: "GitHub Pages soporta un número limitado de plugins para Jekyll, si queremos ir más allá, hay que buscar soluciones."
tags: jekyll, github
---

Últimamente he estado trabajando en algunas actualizaciones y correcciones para mi sitio web personal, que funciona gracias a GitHub Pages y Jekyll 3, desde 2015. Una de estas correcciones y mejoras fue implementar la posibilidad de tener imágenes de OpenGraph para que fuera más llamativo al publicar en redes sociales, usando el plugin [`igor-alexandrov/jekyll-og-image`](https://github.com/igor-alexandrov/jekyll-og-image).

Este plugin requiere un flujo diferente al que ofrece GitHub Pages, debido a las dependencias que utiliza, por lo que es necesario cambiar el sistema de builds a GH Actions y un workflow personalizado en su lugar. Esto me hizo pensar en qué nos estamos perdiendo al seguir usando `gh-pages`, como por ejemplo, seguir atados a los plugins oficiales y validados por GitHub, que aunque ofrece una buena selección, sigue siendo algo limitado. Por ejemplo, no soporta versiones superiores a la 3.10 de Jekyll, algo que me mosquea porque existe [un bug conocido y resuelto en la versión 4.4.0](https://github.com/jekyll/jekyll/issues/9741) que obliga a añadir módulos adicionales... solo para poder construir el sitio.

Para dejar de utilizar GH Pages, lo primero que tuve que hacer es eliminar las referencias de mi `Gemfile`. Quedando algo así.

```ruby
source "https://rubygems.org/"

gem "jekyll", "~> 4.4.1"
gem "jekyll-feed", "~> 0.12"
gem "jekyll-paginate"
gem "jekyll-seo-tag"
gem 'jekyll-og-image'

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "webrick", "~> 1.8"
```

A continuación, regeneramos el `Gemfile.lock` y de paso, actualizamos las dependencias, utilizando `bundle`.

```shell
bundle update
bundle install
```

Y por último, creamos una Action nueva, que haga la magia. El contenido de este workflow es puramente orientativo. Sientete libre de modificarlo para que se adapte a tus necesidades.

```yaml
name: Deploy Jekyll site to Pages

on:
  push:
    branches: ["gh-pages"]

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Ruby
        uses: ruby/setup-ruby@4a9ddd6f338a97768b8006bf671dfbad383215f4
        with:
          ruby-version: '3.4'
          bundler-cache: true
          cache-version: 0
          
      - name: Set Node.js 20.x
        uses: actions/setup-node@v3
        with:
          node-version: 20.x

      - name: Run install
        uses: borales/actions-yarn@v4
        with:
          cmd: install
        
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5

      - name: Build with Jekyll
        run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"

        env:
          JEKYLL_ENV: production
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Una vez publicado, cada vez que hagamos un commit sobre la rama `gh-pages`, regenerará nuestro proyecto y reconstruirá el sitio web. Permitiéndonos extenderlo como queramos.