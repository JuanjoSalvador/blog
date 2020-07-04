---
layout: post
title: "Ejecución de comandos en PostgreSQL"
---

A veces necesitaremos ejecutar algún comando interno de PostgreSQL, para alguna acción rápida, como crear un usuario o una base de datos nueva que posteriormente 
cargaremos con `pg_dump`, o simplemente listar las bases de datos de las que disponemos en nuestra instancia. Hasta ahora, yo solía recurrir a conectarme directamente con el usuario
en cuestión a través de `psql` y ejecutar lo que necesite ahí, pero, ¿puedo hacerlo sin necesidad de cambiar explícitamente de usuario?

Ayer descubrí que existe una opción en `psql` para hacer esto. Por ejemplo, para listar las bases de datos existentes en mi nodo:

```shell
$ psql -c '\list' postgres
```

Mostrando una salida como esta

```
mastodon@ubuntu-s-1vcpu-1gb-lon1-01:~$ psql -c '\list' postgres
                                   List of databases
        Name         |  Owner   | Encoding | Collate |  Ctype  |   Access privileges
---------------------+----------+----------+---------+---------+-----------------------
 mastodon_production | mastodon | UTF8     | C.UTF-8 | C.UTF-8 |
 postgres            | postgres | UTF8     | C.UTF-8 | C.UTF-8 |
 template0           | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
                     |          |          |         |         | postgres=CTc/postgres
 template1           | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
                     |          |          |         |         | postgres=CTc/postgres
(4 rows)
```

Parece una chorrada, pero me ha resultado ser una forma muy útil de gestionar según que cosas de PostgreSQL.
