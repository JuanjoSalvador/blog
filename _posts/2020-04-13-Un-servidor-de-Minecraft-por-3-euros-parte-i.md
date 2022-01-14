---
layout: post
title: Un servidor de Minecraft por 3€ (parte I)
---

Con esto de la cuarentena, mis amigos y yo estuvimos dándole vueltas a qué podíamos hacer para matar el tiempo. Al final la mejor salida fue montar un servidor de Minecraft, porque a ellos les gusta jugar en cooperativo, y a mi me gusta montar servidores. Así que me puse a darle vueltas sobre qué sería lo mejor.

## Escogiendo un servidor: ¿VPS o servidor administrado?

Para mi gusto, escoger un servidor administrado es quitarle la gracia al asunto, por eso yo me he decantado por un [servidor virtual DEV1-S de Scaleway](https://www.scaleway.com/en/virtual-instances/development/), de las más básicas y económicas.

Por 3 euros al mes, me proporcionan:

* 2 vCores
* 2 GB de RAM
* 20 GB de disco SSD

Otras opciones que valoré fueron **DigitalOcean** o **Vultr** en temas de VPS, pero los precios en relación al hardware que ofertan no me parecía rentable para esta empresa. Las alternativas en servidores administrados, fueron principalmente **Minehunt** y **Aternos**, que ofrecen planes gratuitos bastante atractivos y completos, pero la falta de información en sus páginas web sobre planes de pago y precios, no me convenció.

Si tienes intención de abrir un servidor para un fin de semana, o un periodo corto de tiempo, y no quieres mojarte con configuraciones, son tu mejor opción.

## Preparando nuestra nueva máquina

Empecé levantando una instancia de Debian Stable, y conectándome con mi clave previamente añadida en mi cuenta de Scaleway, por SSH como usuario root. Lo ideal habría sido levantar el servidor en un contenedor, pero evitemos la sobreingeniería, *bare metal* no dará problemas.

Los pasos a seguir serán los siguientes:

1. Configurar un usuario para el servicio.
1. Instalar y configurar un firewall
1. Configurar espacio de swap
1. Finalizar instalando la JVM

### Añadir un nuevo usuario

Empezamos creando un usuario para nuestro servicio, necesitaremos darle al menos una contraseña que sea segura, ya que este podrá ser una puerta de entrada a la máquina.

```
root@scw-amazing-stallman # adduser minecraft
```

### Configurar un firewall

Una vez lo tengamos, vamos a instalar `ufw` (si tu máquina viene con Ubuntu, no es necesario instalarlo) para administrar el firewall, y habilitar los puertos 22, 80, 443 y 25565.

```
root@scw-amazing-stallman # apt update
root@scw-amazing-stallman # apt upgrade
root@scw-amazing-stallman # apt install ufw -y
root@scw-amazing-stallman # ufw allow 22/tcp 80/tcp 443/tcp 25565/tcp
```
### Añadir espacio de intercambio

Llegados a este punto, solo nos falta añadir un espacio de intercambio. En principio esto no es obligatorio, pero si queremose exprimir los 2 GB de RAM de la máquina, será un buen añadido. En mi caso, le voy a dar hasta 4 GB de intercambio.

```
root@scw-amazing-stallman # fallocate -l 4G /swap
root@scw-amazing-stallman # chmod 0600 /swap
root@scw-amazing-stallman # mkswap /swap
root@scw-amazing-stallman # swapon /swap
```

Y para asegurarnos de que sea persistente, lo añadimos al `/etc/fstab`.

```
root@scw-amazing-stallman # echo "/swap swap swap defaults 0 0" >> /etc/fstab
```

En este punto, cabe destacar también, que tendremos que configurar el *swappiness* de nuestra máquina para que recurra lo menos posible al espacio de intercambio, dentro de unos márgenes, y así optimizar esta. Si comprobamos el valor actual, veremos que está a 60. El valor ideal es 10.

```
root@scw-amazing-stallman # cat /proc/sys/vm/swappiness
60
root@scw-amazing-stallman # sysctl vm.swappiness=10
10
```

Tras este cambio, no es necesario reiniciar nuestra máquina. Si quieres saber más sobre este tipo de optimización, echa un vistazo a [este artículo de How-To Geek](https://www.howtogeek.com/449691/what-is-swapiness-on-linux-and-how-to-change-it/).

### Instalar la JVM

Hablar de JVM es hablar de Java. Lo óptimo, afirman los desarrolladores que es Java 8, pero dado que ya no se encuentra en los repositorios de Debian/Ubuntu, yo me he decantado por Java 11. Retrocompatible, e igual de funcional. No necesitamos el JDK, solamente el entorno de ejecución (JRE).

```
root@scw-amazing-stallman # apt install openjdk-11-jre-headless
```

Llegados a este punto, tendremos lista nuestra máquina.

### Extra: monitorización.

También puedes instalar un monitor de sistema, que te permita ver en todo momento el estado del servidor y con ello, si tenemos que optimizar algo, o por donde están apareciendo problemas. Para esta tarea, he escogido NetData, que es un monitor ligero, fácil de instalar, y que cumple perfectamente. Para instalarlo, en su [web oficial](https://www.netdata.cloud/#installation) ofrece una guía a tener en cuenta.

Pero para la mayoría de instalaciones, bastaría con ejecutar el siguiente comando:

```
root@scw-amazing-stallman # bash <(curl -Ss https://my-netdata.io/kickstart-static64.sh) \ 
                            --no-updates --stable-channel --disable-telemetry
```