const picker = document.querySelectorAll('.datePicker');


if (picker.length) {
  picker.forEach((item) => {
    const datepicker = new Datepicker(item,);
  });
}