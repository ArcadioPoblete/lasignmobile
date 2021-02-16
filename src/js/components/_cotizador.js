
      const qryVehicles = document.querySelectorAll('.vehicles__button');
      const inputVehicle = document.getElementById('selectVheicles');


      //Selector Vehiculos
      qryVehicles.forEach(item => {
            item.addEventListener('click', () => {
                  
                  //Remueve los estilos que hayan sido activados
                  qryVehicles.forEach(buttons => {
                        buttons.classList.remove('vehicles__button--active');
                  });
                  
                  //Obtiene el nombre del boton activado
                  const name = item.dataset.vehicle;
                  
                  //Guarda el nombre del boton activo en un input
                  inputVehicle.value = name
                  
                  //Activar boton
                  item.classList.add('vehicles__button--active');                  
            })
      });