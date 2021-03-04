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


calcular.addEventListener('click', () => {
    if (monto.value == '') {
            console.log('El monto esta vacio');
    } else {

        
        recibo = monto.value;

        monto = monto.value;
        monto = monto / 4.55;
        monto = monto / 0.312;

        tamSisitema = Math.round(monto);
        tamSisitema = new Intl.NumberFormat("es-MX").format(tamSisitema);


        numPaneles = tamSisitema / 400;
        numPaneles = Math.ceil(numPaneles);


        if (numPaneles <= 11 ) {
            costoSistema = numPaneles * 1425000;
            costoSistema = costoSistema.toString();
            costoLength = costoSistema.length;
            costoLength = costoLength - 2;
            costoSistema = costoSistema.substr(0, costoLength);
        } else {
            costoSistema = numPaneles * 1200000;
            costoSistema = costoSistema.toString();
            costoLength = costoSistema.length;
            costoLength = costoLength - 2;
            costoSistema = costoSistema.substr(0, costoLength);
        }

        

        anticipo = costoSistema * 0.3;

        renta = costoSistema * 1.3;
        renta = renta - anticipo;
        renta = renta / 60;

        ahorro = renta * 2;
        ahorro  = ahorro / recibo;
        ahorro = 1 - ahorro;


        console.log("Monto: " + recibo);
        console.log("Tamañodel sistema: " + tamSisitema);
        console.log("Numero de paneles: " + numPaneles);
        console.log("Costo del sistema: " + costoSistema);
        console.log("Adquierelo con un anticipo de: " + anticipo);
        console.log("y 60 rentas de: " + renta);
        console.log("Ahorro de enrgia de: " + ahorro);


    }
});