#Tasca 2.4 Projecte Lunar Landing. Javascript RELEASE

##Descripción de la Tarea

He tenido que pensar que cuando el FUEL se terminara debían darse estas situaciones:

1. El motor debía estar apagado, por lo que la imagen de la nave debía ser la NAVEOFF
  * if (fuel==0){motorOff()}
2. Al estar con el motor apagado, la nave cae sin posibilidad de remontar el vuelo (“onkeyup”)
3. El contador del fuel no debía dar valores negativos Si nos quedamos sin FUEL tenemos 0L
  * if(fuel<0){fuel=0;document.getElementById("onoff").src='img/naveoff.png';}
    
**Para los “window.alert” debía usar ciertos condicionales para que en el mismo instante en el que se diera la situación de que la altura era mayor que 70m, comprobar si la velocidad era mayor que 5m/s lo que produciría la explosión de la nave.**

**2.** El panel de control nos mostrará datos de la nave a tiempo real segun nos vayamos desplazando con la misma en la pantalla. He creado una lista de los diferentes datos a mostrar como son: Velocidad de la nave, Altitud de la nave y Nivel de gasolina.

**3.** Las Opciones del juego están configuradas tambien como un menu en el que, por ahora y mientras no ampliemos a más opciones (que lo haremos en un futuro con SPRITES), aparece los "botones" de:

   * PAUSE: En la próxima parte de la práctica esto nos permitira, como la propia palabra indica, pausar el juego.
   * About: Página HTML informátiva sobre el juego, su desarrollo y su creador. También se desarollará ampliamente en la siguiente parte de la práctica.
   * How to play: Página en la que explicamos las instrucciones del propio juego, como jugar.

**4.** La nave es el objeto principal del juego y se moverá en vertical por la pantalla. Hemos definido una imagen de la nave en el centro de la pantalla.




###_**Jorge Navarro Cerdá**_
