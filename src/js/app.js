import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../../node_modules/@fortawesome/fontawesome-free/js/all.js';
import  '../../node_modules/headroom.js/dist/headroom.js';
import './components/components.js';


const picker = document.querySelectorAll('.datePicker');

picker.forEach((item) => {
    const datepicker = new Datepicker(item, {
      
  });
});

