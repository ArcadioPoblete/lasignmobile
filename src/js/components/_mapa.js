var cords =  { lat: 20.599815880267002, lng: -100.37666970511867};

let map;


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: cords,
      zoom: 19,
      styles:  [
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "hue": "#6600ff"
                  },
                  {
                      "saturation": "-16"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "saturation": "0"
                  },
                  {
                      "gamma": "0.7"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": "27"
                  },
                  {
                      "hue": "#3200ff"
                  },
                  {
                      "lightness": "3"
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "weight": "1.00"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "weight": "0.01"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "weight": "0.01"
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.attraction",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": "-58"
                  },
                  {
                      "lightness": "28"
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": "-31"
                  },
                  {
                      "lightness": "7"
                  },
                  {
                      "visibility": "on"
                  },
                  {
                      "gamma": "1"
                  },
                  {
                      "weight": "0.01"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "off"
                  },
                  {
                      "gamma": "1"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "gamma": "1"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "weight": "1"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "weight": "0.01"
                  },
                  {
                      "gamma": "1"
                  },
                  {
                      "lightness": "0"
                  },
                  {
                      "saturation": "0"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "weight": "0.01"
                  }
              ]
          },
          {
              "featureType": "poi.government",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": "-58"
                  },
                  {
                      "lightness": "28"
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.medical",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": "-58"
                  },
                  {
                      "lightness": "28"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "saturation": "-58"
                  },
                  {
                      "lightness": "28"
                  }
              ]
          },
          {
              "featureType": "poi.place_of_worship",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": "-58"
                  },
                  {
                      "lightness": "28"
                  }
              ]
          },
          {
              "featureType": "poi.school",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": "-58"
                  },
                  {
                      "lightness": "28"
                  }
              ]
          },
          {
              "featureType": "poi.sports_complex",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": "-58"
                  },
                  {
                      "lightness": "28"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "hue": "#6600ff"
                  },
                  {
                      "saturation": "-57"
                  },
                  {
                      "lightness": "-28"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "lightness": "-100"
                  },
                  {
                      "saturation": "10"
                  },
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "saturation": "0"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "lightness": "100"
                  },
                  {
                      "saturation": "100"
                  },
                  {
                      "weight": "0.01"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "all",
              "stylers": [
                  {
                      "lightness": "-45"
                  },
                  {
                      "weight": 1.3
                  },
                  {
                      "color": "#6600ff"
                  },
                  {
                      "saturation": "-57"
                  },
                  {
                      "gamma": "2.35"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "simplified"
                  },
                  {
                      "hue": "#5e00ff"
                  },
                  {
                      "saturation": -16
                  }
              ]
          },
          {
              "featureType": "transit.line",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -72
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -65
                  },
                  {
                      "hue": "#1900ff"
                  },
                  {
                      "lightness": 8
                  }
              ]
          }
      ]
    });
  
    const message = '<div>Esta es mi casa</div>';
  
    const infowindow = new google.maps.InfoWindow({
      content: message,
    });
    
  
    const marker = new google.maps.Marker({
          position: cords,
          map: map,
          icon: '../../web/img/layout/marker-cdmx.svg',
          title: "Mi casa"
    });
  
    marker.addListener('click', () => {
      infowindow.open(map, marker);
    });
    
  }