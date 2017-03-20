ymaps.ready(init);
var myMap, 
    myPlacemark;

function init(){ 
    myMap = new ymaps.Map("map", {
        center: [59.9362, 30.3211],
        zoom: 16,
        controls: []
    }); 
    
    myPlacemark = new ymaps.Placemark([59.9365, 30.3208], {
        hintContent: 'PINK',
        balloonContent: 'Приезжайте в гости'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon-map-marker.svg',
        iconImageSize: [35, 35],
        iconImageOffset: [0, 0]
    });
    
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable(['scrollZoom']);
}
