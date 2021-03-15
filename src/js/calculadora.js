const calcular = document.getElementById('cal-index');
var monto = document.getElementById('monto');
var tamSisitema;
var numPaneles;
var costoSistema;
var anticipo;
var renta;
var ahorro;
var recibo;
var costoLength;


if (calcular) {
        calcular.addEventListener('click', () => {
                if (monto.value == '') {
                        console.log('El monto esta vacio');
                } else {
            
                        valor = monto.value;
            
                        tamSisitema  = monto.value;
                        tamSisitema  = tamSisitema / 4.55;
                        tamSisitema  = tamSisitema / 0.312;
            
                        tamSisitema = Math.round(tamSisitema);
            
            
                        numPaneles = tamSisitema / 400;
                        numPaneles = Math.ceil(numPaneles);
            
            
                        if (numPaneles <= 11 ) {
                                costoSistema = numPaneles * 14250;
                                sistema = new Intl.NumberFormat('es-MX').format(costoSistema);
                        } else {
                                costoSistema = numPaneles *  12000;
                                sistema= new Intl.NumberFormat('es-MX').format(costoSistema);
                        }
            
            
                        anticipo = costoSistema * 0.3;
                        resAnticipo = new Intl.NumberFormat('es-MX').format(anticipo);
            
                        renta = costoSistema * 1.3;
                        renta = renta - anticipo;
                        renta = renta / 60;
            
                        ahorro = renta * 2;
                        ahorro = ahorro / valor;
                        ahorro = 1 - ahorro;
                        ahorro = ahorro * 100;
                        ahorro = Math.floor(ahorro);
                        ahorro = Math.abs(ahorro);
            
                        document.querySelector('.tabla__result').innerHTML = tamSisitema + ' KW';
                        document.querySelector('.tabla__paneles').innerHTML = numPaneles;
                        document.querySelector('.tabla__sistema').innerHTML = '$' +  sistema + '.00';
                        document.querySelector('.tabla__anticipo').innerHTML = '$' + resAnticipo + '.00';
                        document.querySelector('.tabla__renta').innerHTML = '$' + renta + '0';
                        document.querySelector('.tabla__ahorro').innerHTML = ahorro + '%';
                }
            });
}

