var map = L.map('map',{
	center:[0.000, 36.8167],
	zoom:6,
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.light'
}).addTo(map);


var geojsonLayer = new L.GeoJSON.AJAX("rawdata/kenya_county.geojson",{
	onEachFeature:function(feature, layer){
		var popupContent = 'County Name:  ' + feature.properties.HRName;
		if(feature.properties && feature.properties.popupContent){
			popupContent += feature.properties.popupContent;
		}
		layer.bindPopup(popupContent);
	},
	style:function(feature){
		switch (feature.properties.HRName) {
				case 'Baringo':
					return {
						weight: '1.3',
						fillColor: '#bd13db',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Bomet':
					return {
						weight: '1.3',
						fillColor: '#56ddd4',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Bungoma':
					return {
						weight: '1.3',
						fillColor: '#93e968',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Busia':
					return {
						weight: '1.3',
						fillColor: '#6e53cd',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Elgeyo-Marakwet':
					return {
						weight: '1.3',
						fillColor: '#7c9ae0',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Embu':
					return {
						weight: '1.3',
						fillColor: '#cd70b7',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Garissa':
					return {
						weight: '1.3',
						fillColor: '#0d30e2',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Homa Bay':
					return {
						weight: '1.3',
						fillColor: '#66f0c5',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Isiolo':
					return {
						weight: '1.3',
						fillColor: '#c9c178',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Kakamega':
					return {
						weight: '1.3',
						fillColor: '#3a84e4',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Kericho':
					return {
						weight: '1.3',
						fillColor: '#5de564',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Kiambu':
					return {
						weight: '1.3',
						fillColor: '#6fd5eb',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Kilifi':
					return {
						weight: '1.3',
						fillColor: '#cd952b',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Kirinyaga':
					return {
						weight: '1.3',
						fillColor: '#cd952b',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Kisii':
					return {
						weight: '1.3',
						fillColor: '#d05a67',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Kisumu':
					return {
						weight: '1.3',
						fillColor: '#4750ed',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Kitui':
					return {
						weight: '1.3',
						fillColor: '#9162ef',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Kwale':
					return {
						weight: '1.3',
						fillColor: '#6bdf8e',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Laikipia':
					return {
						weight: '1.3',
						fillColor: '#5ce9d0',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Lamu':
					return {
						weight: '1.3',
						fillColor: '#d85398',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Machakos':
					return {
						weight: '1.3',
						fillColor: '#51b7e6',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Makueni':
					return {
						weight: '1.3',
						fillColor: '#c3d26d',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Mandera':
					return {
						weight: '1.3',
						fillColor: '#93d732',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Marsabit':
					return {
						weight: '1.3',
						fillColor: '#660ccd',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Meru':
					return {
						weight: '1.3',
						fillColor: '#65ebaf',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Migori':
					return {
						weight: '1.3',
						fillColor: '#85b7e0',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Mombasa':
					return {
						weight: '1.3',
						fillColor: '#85b7e0',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case "Murang'a":
					return {
						weight: '1.3',
						fillColor: '#e35c7e',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Nairobi':
					return {
						weight: '1.3',
						fillColor: '#7d73eb',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Nakuru':
					return {
						weight: '1.3',
						fillColor: '#40e588',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Nandi':
					return {
						weight: '1.3',
						fillColor: '#ec2974',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Narok':
					return {
						weight: '1.3',
						fillColor: '#eb7c7b',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Nithi':
					return {
						weight: '1.3',
						fillColor: '#d3bb6a',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Nyamira':
					return {
						weight: '1.3',
						fillColor: '#71dc67',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Nyandarua':
					return {
						weight: '1.3',
						fillColor: '#db683e',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Nyeri':
					return {
						weight: '1.3',
						fillColor: '#e0e460',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Samburu':
					return {
						weight: '1.3',
						fillColor: '#a334ce',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Siaya':
					return {
						weight: '1.3',
						fillColor: '#71e5ed',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Taita Taveta':
					return {
						weight: '1.3',
						fillColor: '#da7363',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Tana River':
					return {
						weight: '1.3',
						fillColor: '#ab69d7',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Trans-Nzoia':
					return {
						weight: '1.3',
						fillColor: '#d119bf',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Turkana':
					return {
						weight: '1.3',
						fillColor: '#c72bcc',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Uasin Gishu':
					return {
						weight: '1.3',
						fillColor: '#85ee68',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Vihiga':
					return {
						weight: '1.3',
						fillColor: '#f09636',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'Wajir':
					return {
						weight: '1.3',
						fillColor: '#2ada48',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				case 'West Pokot':
					return {
						weight: '1.3',
						fillColor: '#a0d519',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
				default:
					return {
						weight: '1.3',
						fillColor: '#6dc91c',
						color: '#000000',
						weight: '1',
						dashArray: '',
						opacity: '1.0',
						fillOpacity: '1.0',
					};
					break;
		}
	}
}).addTo(map);
var legend = L.control({position: 'topleft'});
legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'info legend');
	div.innerHTML = "<h3>Legend</h3><table></table>";
	return div;
};
legend.addTo(map);


