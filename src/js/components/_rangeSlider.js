$(".js-range-slider").ionRangeSlider({
    skin: 'round',
    type: "double",
    min: 90000,
    max: 500000,
    from: 90,
    to: 200000,
    prefix: '$',
    onChange: (data) => {
        //console.log("De: " + data.from + ' Hasta: ' + data.to );
    }
});