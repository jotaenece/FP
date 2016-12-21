#Tasca 2.4 Projecte Lunar Landing. Javascript RELEASE

##Descripción de la Tarea

He tenido que pensar que cuando el FUEL se terminara debían darse estas situaciones:

1. El motor debía estar apagado, por lo que la imagen de la nave debía ser la NAVEOFF
  * if (fuel==0){motorOff()}
2. Al estar con el motor apagado, la nave cae sin posibilidad de remontar el vuelo (“onkeyup”)
3. El contador del fuel no debía dar valores negativos. Si nos quedamos sin FUEL tenemos 0L
  * if(fuel<0){fuel=0;document.getElementById("onoff").src='img/naveoff.png';}
    
Para los “window.alert” debía usar ciertos condicionales para que en el mismo instante en el que se diera la situación de que la altura era mayor que 70m, comprobar si la velocidad era mayor que 5m/s lo que produciría la explosión de la nave:
  * Explicado en las líneas de código del archivo js.js: Línea 63 a 78 
 
Hemos definido dos imágenes, una para cada estado de la nave:
 * naveoff.png para cuando la nave está APAGADA
 * naveon.png para cuando la nave está ENCENDIDA
 * Si la nave explota, aparece un "window.alert" para indicar que has perdido la partida al hacer explotar la nave


####IMPORTANTE
**El resto de especificaciones respecto a los comandos utilizados están señalados con comentarios(/* */) en el archivo javascript: js.js**

###_**Jorge Navarro Cerdá**_
