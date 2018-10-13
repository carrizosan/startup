#CSS
2.3  Exersise 6. I could use this to win over classes added by point 3

* {
  font-size: 20px !important;
}

2.3  Exersise 7. I could override a inline-style with this:

.footer {
  background:magenta !important;
}

But using !important isn't a best-practice.

#####################################################################

/* Problema: layout.
En el ejercicio 2.5.1 de hacer el layout, tuve algunos problemas con el nav.
Mas que nada con el posicionamiento. Ya que si pongo position: absolute, el
siguiente elemento, en este caso el content, se me viene encima del nav.
Y en el caso de que ponga relative, quedan ordenados pero el nav queda en 
la parte de abajo de su contenedor. 
Si bien lo pude arreglar y hacer que suba (con el relative y bottom: #px),
se que no es la mejor forma, ya que cualquier cambio de tamaño que haga en
el interior del nav a los elementos de la lista, me mueve todo el nav para
arriba o abajo.
Con el aside no tuve problema ya que no tiene elementos contiguos y puse
absolute para que se posicione bien.
Me gustaria saber cual seria la forma correcta de hacerlo, aca subo lo que
hice hasta ahora.
Espero que se haya entendido la consulta! */