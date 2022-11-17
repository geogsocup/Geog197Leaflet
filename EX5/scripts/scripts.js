var map = L.map('map').setView([14.5799, 121.0206], 11);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.geoJson(NCRdata).addTo(map);

//color palette
function getColor(d) {
    return d > 40000 ? '#ff0000' :
           d > 35000  ? '#ff2a2a' :
           d > 30000  ? '#ff5555' :
           d > 25000  ? '#ff8080' :
           d > 20000   ? '#ffaaaa' :
           d > 15000   ? '#ffd5d5' :
           d > 13000   ? '#ffffff' :
                      '#ffffff';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(NCRdata, {style: style}).addTo(map);