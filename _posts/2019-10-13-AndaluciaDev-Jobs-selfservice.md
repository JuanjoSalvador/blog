---
layout: post
title: AndalucíaDev Jobs Selfservice
---

Recientemente he empezado a escribir una aplicación web sencilla que me permite gestionar un canal de [Telegram para ofertas de trabajo](https://t.me/andaluciadevjobs)
mediante «autoservicio». Es decir, los propios usuarios pueden enviar sus ofertas para ser publicadas, con el formato correcto,
facilitando la administración hasta el punto de solo necesitar revisar cada oferta y darle al botón de publicar. La versión en desarrollo se puede [visualizar aquí](https://ad-jobs.herokuapp.com/).

### La idea

El canal nació como un tablón de anuncios, para colgar las ofertas que los usuarios del grupo Andalucía Developers iban colgando, y evitar
así que quedasen enterradas bajo una tormenta de mensajes. Una forma de mantenerlas visibles, y que aquellos que buscan trabajo o estén
interesados en un cambio de puesto, puedan encontrarlas. El problema vino cuando empezaron a ser más frecuentes las ofertas, y cada vez me
era más difícil gestionarlas a mano, por lo que la solución más obvia era delegar este trabajo en varias personas... o en los propios usuarios.

### El stack

En cuanto al conjunto de tecnologías que estoy utilizando para esta aplicación, encontramos cosas como:

* Python 3.6
* [**Flask**](https://palletsprojects.com/p/flask/) para el backend de la aplicación
* [**Bulma**](https://bulma.io/) para darle estilo
* [**Jinja**](https://palletsprojects.com/p/jinja/) para dotar de un frontend basado en plantillas
* [**API de bots de Telegram**](https://core.telegram.org/bots) para conectar con los usuarios
* [**PostgreSQL**](https://www.postgresql.org/) para almacenar información
* [**Gunicorn**](https://gunicorn.org/) para servir la aplicación
* [**Heroku**](https://heroku.com/) para alojar todo

### Conectar el backend con Telegram

La mejor forma de conectarlo, es mediante un bot que administra el canal, con permisos solo para enviar mensajes, y un pequeño script que
envía peticiones HTTP a través del API de bots de Telegram con el mensaje que debe compartir. En este caso, el script viene acompañado de un
fichero de configuración, en la versión standalone estoy utilizando un `settings.ini`, pero al integrarlo con Flask puede hacerse uso de los
`.cfg` del microframework.

```python
    import urllib3
    import configparser
    import os

    config = configparser.ConfigParser()
    config.read(os.path.join(os.path.dirname(__file__), 'settings.ini'))
    http = urllib3.PoolManager()

    message = "ENTER YOUR MESSAGE HERE"
    URL = "https://api.telegram.org/bot{}/sendMessage?chat_id={}&text={}".format(
                      config['DEFAULT']['API_KEY'], 
                      config['DEFAULT']['CHANNEL_NAME'], 
                      message
    )

    try:
        http.request('GET', URL)
    except Exception as ex:
        print("Something went wrong: \n {}".format(ex))
```

¿Cómo funciona esto? Simplemente manda una petición GET a `api.telegram.org` utilizando algunos parámetros.

* **BOT_API_KEY**, hace referencia a la clave del API que BotFather nos da cuando creamos nuestro bot.
* **CHANNEL_NAME**, indica el nombre del canal al que vamos a publicar, preferiblemente un canal público, algo como `@micanalmolon`.

### Desplegando en Heroku

Sorprendentemente, el despligue de proyectos en Heroku es más sencillo de lo que me esperaba. Según la [documentación de Heroku](https://devcenter.heroku.com/categories/reference),
para desplegar mi aplicación, solo necesito añadir un fichero `Procfile` a la raíz de mi proyecto, con indicaciones para el despliegue, y entre
las dependencias, añadir un servidor WSGI, Gunicorn en este caso.

    web: gunicorn main:app

¡Y ya está!

### Futuro del desarrollo

Aún me queda trabajo por hacer, empezando por el panel de administración, el cual aún está en una fase muy temprana. Pero viendo como avanza
el proyecto y la utilidad que podría tener para aquellos que utilizan Telegram como un medio de difusión de contenidos, de cara al futuro
me gustaría poder parametrizar lo suficiente la aplicación como para que cualquiera pueda personalizarla a su gusto, y desplegarla en cualquier
servicio, a través de Docker, Podman, Heroku, PythonAnywhere, etc.

De momento, el código no es público, pero planeo liberarlo con licencia MIT próximamente.
