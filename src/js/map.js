import ymaps from 'ymaps';

ymaps
  .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
  .then(maps => {
    const map = new maps.Map('map-wrapper', {
      center: [53.88921557, 27.51963750],
      zoom: 16
    });
	})
	.catch(error => console.log('Failed to load Yandex Maps', error));
// var myPlacemark = new ymaps.Placemark([55.75399400, 37.62209300], {}, {
// 	iconLayout: 'default#image',
// 	iconImageHref: '../../images/pin.png',
// 	iconImageSize: [78, 98],
// });
// map.geoObjects.add(myPlacemark);
