function initMap() {
	L.mapquest.key = 'OuI9SfvfZywGKo6RVNJQhqMIrVQ3goNS';

// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
  		center: [32.88, -117.236],
  		layers: L.mapquest.tileLayer('map'),
  		zoom: 12
	});
	L.marker([32.90, -117.259]).addTo(map);
}
