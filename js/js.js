var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g.toFixed(2); /* definimos decimales a ser mostrados, solo 2 */
var dt1 = 0.016683;
var dt = dt1.toFixed(2);
var timer=null;
var timerFuel=null;
var fuel=100;

//al cargar por completo la página...
window.onload = function(){
	//definición de eventos
	//mostrar menú móvil
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		/* Evitamos que al pulsar "show menu" no lo interprete como "motoron" */
		
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	//encender/apagar el motor al hacer click en la pantalla
	document.onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
		
	start();
	
}

//Definición de funciones
function start(){
	timer=setInterval(function(){
	moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
	clearInterval(timerFuel);
}

function moverNave(){
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v.toFixed(2);
	y +=v*dt;
	document.getElementById("altura").innerHTML=y.toFixed(2);
	
	if (fuel==0){/* Si nos quedamos sin combustible, la nave caerá */
		motorOff()
	}
	
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%"; 
	} 
	else{
	/* Momento en que si la nave llega a más velocidad que 5m/s al tocar el suelo, explota. */
		if(v>=5){
			window.alert("HA EXPLOTADO LA NAVE");
			window.alert("SI DESEAS VOLVER A JUGAR, DEBES PULSAR 'JUGAR'");
			stop()
		}
		else{
			window.alert("BUEN ATERRIZAJE!!");
			stop();
		}
		stop();
	}
	
}

function motorOn(){
	a=-g;
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarAltura(); }, 100);	
	/* definimos imagen que se debe visualizar al tener la nave en marcha */
	document.getElementById("onoff").src="img/naveon.png";
	
	if (fuel==0){/* Si nos quedamos sin combustible, la nave caerá */
		motorOff()
	}
}
function motorOff(){
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
	/* definimos imagen que se debe visualizar al tener la nave apagada o sin combustible */
	document.getElementById("onoff").src='img/naveoff.png';	
}
function actualizarAltura(){	
	fuel-=1;
	document.getElementById("fuel").innerHTML=fuel;	
	/* evitamos valores de FUEL negativos */
	if(fuel<0){
		fuel=0;
		document.getElementById("onoff").src='img/naveoff.png';
	}
}
