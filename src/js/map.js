import ymaps from 'ymaps';

var myPlacemark;

ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {
		const map = new maps.Map('map-wrapper', {
			center: [53.88921557, 27.51963750],
			zoom: 16,
			controls: []
		}, {
			suppressMapOpenBlock: true
		});

		map.behaviors.disable('scrollZoom');
		myPlacemark = new maps.Placemark([53.8895522662247,27.5195221650123], {}, {
			iconLayout: 'default#image',
			iconImageHref: 'images/map_point.png',
			iconImageSize: [91, 99],
			iconImageOffset: [-13, -73]
		});

		map.geoObjects.add(myPlacemark);
	})
	.catch(error => console.log('Failed to load Yandex Maps', error));