#!/bin/bash

# Obtiene la fecha del sistema

DATE=`date +%Y-%m-%d`

# Convierte en una cadena separada por guiones el nombre del archivo

NAME=`echo $* | tr " " -`

# Variable con el nombre FINAL del archivo

FILENAME=$DATE-$NAME.md


# Abre un archivo con la fecha y el nombre indicado como nombre de archivo.

touch ../_posts/$FILENAME

echo "---
layout: post # Sustituye el layout si lo usas uno diferente
title: $* # Nombre generado automáticamente
categories: [] # Añade tus categorías o borra esta línea
---" > ../_posts/$FILENAME

echo "Nuevo post generado: $FILENAME"

# Sustitute nano por tu editor de texto favorito (gedit, leafpad, vim, atom...)

atom ../_posts/$FILENAME
