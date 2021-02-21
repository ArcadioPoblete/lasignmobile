const calcular = document.getElementById('btn-calcular');
const recibo = document.querySelector('.calculadora__input');
const calculo_01 = document.querySelector('.tamano_sistema');
const num_paneles_text = document.querySelector('.numPaneles');
const costo_sistema_text = document.querySelector('.costo_sistema');
const anticipo_text = document.querySelector('.anticipo');
const renta_text = document.querySelector('.renta');
const ahorro_text = document.querySelector('.ahorro');

$(document).ready(function(){
    $('.monto').mask("#.##0.00", {reverse: true});
    
})
    


calcular.addEventListener('click', () => {
    const monto = recibo.value.replace(/\./g, ''); // Elimina los puntos del monto
    const tamano = monto / 4.55;
    const valor1 = 5.2 * 30 * 0.002;
    var costoSistema = '';
    var numPaneles = '';
    var anticipo = '';
    var renta = '';
    var ahorro = '';

   

    //Tamaño del sistema sugerido
    const result01 = Math.floor(tamano / valor1);
    //Se combierte en string
    const string01 = result01.toString();
    //Calcula el numero a recortar 
    const numSubstr = string01.length - 2;
    //Extrae el numero
    const tamSistema = string01.substr(0, numSubstr);
    //Calculo de numeor de paneles necesarios
    numPaneles = tamSistema / 400;
    numPaneles = Math.ceil(numPaneles);

    
    //Costo del sistma por numero de paneles
    if (numPaneles < 12) {
        costoSistema = numPaneles * 1425000;
    } else  {
        costoSistema = numPaneles * 1200000;
        
    }
    //Anticipo
    anticipo = costoSistema * 0.3;
    //Renta
    renta = costoSistema * 1.3;
    renta = renta - anticipo;
    renta = renta / 60;

    //Ahorro bimestral
    ahorro = renta * 2;
    ahorro = ahorro / monto;
    ahorro = 1 - ahorro;

    //Imprimae los datos en la tabla
    calculo_01.innerHTML = tamSistema + ' KW';
    num_paneles_text.innerHTML = numPaneles;
    costo_sistema_text.innerHTML = costoSistema;
    anticipo_text.innerHTML = anticipo;
    renta_text.innerHTML = renta;
    ahorro_text.innerHTML = ahorro;

    $('.costo_sistema').mask("#.##0.00", {reverse: true});
    $('.anticipo').mask("#.##0.00", {reverse: true});
    $('.renta').mask("#.##0.00", {reverse: true});
});