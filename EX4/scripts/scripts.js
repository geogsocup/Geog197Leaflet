const map = L.map('map').setView([14.65303, 121.06978], 18);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

//Create marker
const marker = L.marker([14.65303, 121.06978]).addTo(map)
		.bindPopup('<b>Hello AS!</b><br />You are here.').openPopup();

//Create circle
const circle = L.circle([14.65315, 121.07144], {
		color: 'blue',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 20
	}).addTo(map).bindPopup('Department of Geography');

//Create polygon
const polygon = L.polygon([
		[14.65278,121.06954],
		[14.65285,121.06975],
		[14.65258,121.06975],
		[14.65259,121.06954]
	]).addTo(map).bindPopup('Geography smoking area');


const popup = L.popup()
		.setLatLng([14.65380,121.06968])
		.setContent('AS Steps.')
		.openOn(map);
		
function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent(`You clicked the map at ${e.latlng.toString()}`)
			.openOn(map);
	}

map.on('click', onMapClick);
