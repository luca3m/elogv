.TH ELOGV "1" "Mayo de 2008" "�rdenes de usuario"
.SH NAME
elogv \- Visor de elog.
.SH DESCRIPCI�N
Elogv es un visor de elog de Portage basado en Curses y Python.
.SH USO
Puede utilizar estas teclas para controlar el comportamiento del programa:
.TP
.B "Flecha abajo" o "j"
Desplazar la lista de ficheros una unidad hacia abajo.
.TP
.B "Flecha arriba" o "k"
Lo contrario de Flecha abajo.
.TP
.B "Av P�g"
Desplazar la lista diez unidades hacia abajo.
.TP
.B "Re P�g"
Lo contrario de Av P�g.
.TP
.B Fin
Ir al �ltimo fichero de la lista.
.TP
.B Inicio
Ir al primer fichero de la lista.
.TP
.B t
Ordenar la lista de ficheros por fecha, los m�s recientes al principio.
.TP
.B a
Ordenar la lista de ficheros alfab�ticamente, la primera vez por categor�a, la segunda vez (volviendo a presionar la tecla) por el nombre del paquete.
.TP
.B c
Ordenar la lista de ficheros seg�n el nivel de advertencia.
.TP
.B r
Invertir la lista de ficheros.
.TP
.B Barra espaciadora
Desplazar el contenido del fichero seleccionado.
.TP
.B  h o F1
Mostrar la pantalla de ayuda: presione Re P�g/Av P�g para desplazar arriba y abajo. Pulse h o F1 de nuevo para ocultar la pantalla.
.TP
.B d
Eliminar los ficheros seleccionados. Su uso es similar al del comando "d" en Vim, he aqu� algunos ejemplos:
.RS
.TP
.I da
Eliminar todos los ficheros.
.TP
.I de
Eliminar desde el �tem seleccionado hasta el final de la lista.
.TP
.I ds
Eliminar desde el �tem seleccionado hasta el principio de la lista.
.TP
.I "d1d o dd"
Eliminar �nicamente el fichero seleccionado.
.TP
.I d4d
Eliminar cuatro ficheros comenzando desde el que se halla seleccionado.
.RE
.TP
.B /
Iniciar una operaci�n de b�squeda. Escriba una cadena de texto y se mostrar� el siguiente paquete que contiene esa cadena, use ESC para salir.
.TP
.B q
Salir
.SH NOTAS
Para utilizar este software, usted necesita tener configurado el sistema de elog de Portage en su fichero /etc/make.conf. Esta es una configuraci�n sencilla:

.nf
# Logging
PORTAGE_ELOG_CLASSES="warn error log"
PORTAGE_ELOG_SYSTEM="save"
.TP
Para otros detalles, vea el fichero /etc/make.conf.example
.SH "INFORMANDO DE ERRORES"
Informe de los errores en GitHub:
.P
https://github.com/luca89/elogv/issues
.SH AUTOR
Luca Marturana (luca89) <lucamarturana@gmail.com>
.SH TRADUCCI�N
Rafael Antonio Porras Samaniego <rafa@distrobit.net>
