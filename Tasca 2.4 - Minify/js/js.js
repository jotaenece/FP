var y=10;var v=0;var g=1.622;var a=g.toFixed(2);var dt1=0.016683;var dt=dt1.toFixed(2);var timer=null;var timerFuel=null;var fuel=100;window.onload=function(){document.getElementById("showm").onclick=function(){document.getElementsByClassName("c")[0].style.display="block";stop();} document.getElementById("hidem").onclick=function(){document.getElementsByClassName("c")[0].style.display="none";start();} document.onclick=function(){if(a==g){motorOn();}else{motorOff();}} document.onkeydown=motorOn;document.onkeyup=motorOff;start();} function start(){timer=setInterval(function(){moverNave();},dt*1000);} function stop(){clearInterval(timer);clearInterval(timerFuel);} function moverNave(){v+=a*dt;document.getElementById("velocidad").innerHTML=v.toFixed(2);y+=v*dt;document.getElementById("altura").innerHTML=y.toFixed(2);if(fuel==0){motorOff()} if(y<70){document.getElementById("nave").style.top=y+"%";} else{if(v>=5){window.alert("HA EXPLOTADO LA NAVE");window.alert("SI DESEAS VOLVER A JUGAR, DEBES PULSAR 'JUGAR'");stop()} else{window.alert("BUEN ATERRIZAJE!!");stop();} stop();}} function motorOn(){a=-g;if(timerFuel==null) timerFuel=setInterval(function(){actualizarAltura();},100);document.getElementById("onoff").src="img/naveon.png";if(fuel==0){motorOff()}} function motorOff(){a=g;clearInterval(timerFuel);timerFuel=null;document.getElementById("onoff").src='img/naveoff.png';} function actualizarAltura(){fuel-=1;document.getElementById("fuel").innerHTML=fuel;if(fuel<0){fuel=0;document.getElementById("onoff").src='img/naveoff.png';}}