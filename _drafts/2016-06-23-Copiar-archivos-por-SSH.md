---
layout: post # Sustituye el layout si lo usas uno diferente
title: Copiar archivos por SSH
---

Cuando Ismael Olea me dijo que el FTP estaba anticuado, me sentí bastante desactualizado en cuanto a administración de servidores. Lo primero que me vino a la mente, fue si quizás se estaría refiriendo a que deberíamos usar FTPS (el protocolo FTP sobre SSL), ya que, en mis años de estudiante ya se hablaba de que iba a ser el nuevo estándar. Sin embargo, me hablaba de SSH.

Es una característica que me resultaba curiosa y nueva. ¿Tranmisión de ficheros directamente por SSH? Pues si, se puede. Vaya que si. Y encima, de forma bidireccional.

Para ello, haríamos uso del comando SCP (Secure Copy Protocol).

#### Tranmisión de local a remoto

    scp /path/to/file username@a:/path/to/destination

#### Tranmisión de remoto a local

    scp username@b:/path/to/file /path/to/destination
    
Estas cosas nunca dejan de sorprenderme.
