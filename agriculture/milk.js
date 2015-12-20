var map = L.map('map',{
	center:[0.0, 36.8167],
	zoom:6,
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.light'
}).addTo(map);

function getColor(d) {
    return d > 300 ? '#ff0000' :
		   d > 250 ? '#ff0000' :
           d > 200 ? '#ff3300' :
           d > 150 ? '##ff4d4d' :
           d > 100 ? '#ff8080' :
           d > 50 ? '#FD8D3C' :
           d > 25  ? '#FEB24C' :
                    '#FFEDA0';
}
function style(feature) {
    return {
        fillColor: getColor(feature.properties.milk),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}



var maizeLayer = new L.GeoJSON.AJAX("../rawdata/agriculture.geojson",{
	onEachFeature:function(feature,layer){
		var popupContent = 'Name  ' + feature.properties.Name + '<br>'+ 
		'Quantity  ' + feature.properties.milk;
		if(feature.properties && feature.properties.popupContent){
			popupContent += feature.properties.popupContent
		}
		layer.bindPopup(popupContent);
	},
	style: style
}).addTo(map);