
mapboxgl.accessToken=mapToken;
const map = new mapboxgl.Map({
	container: "map", // container ID
	style:"mapbox://styles/mapbox/streets-v12", // style URL
	center: [12.554729,55.70651], // starting position [lng, lat]
	zoom: 9, // starting zoom
});

// const marker=new mapboxgl.Marker({color:"red"})
// .setLngLat([12.554729,55.70651]) //linsting.geometry.coordinates
// .addTo(map);